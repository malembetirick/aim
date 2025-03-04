from abc import abstractmethod
from typing import Iterator, Tuple, Union

from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from aim.storage.treeview import TreeView
    from aim.storage.types import BLOB

ContainerKey = bytes
ContainerValue = Union[bytes, 'BLOB[bytes]']


class Container:
    """Container is a interface of mutable key-value storage.

    We can think of :obj:`Container` as a set of `(key, value)` records. This
    definition enables us to easily define union-containers, store a Container
    physically in separate locations in chunks, optionally by partitioning data
    w.r.t. key contents (for example, group data chunks by key prefixes).

    The interface is similar to a flat dict-like object where both keys and the
    values are `bytes` objects. The design of interface makes it easy to manage
    groups of data to be stored with shared prefixes and implementations should
    be designed to provide optimized access to such constructs.
    """

    @abstractmethod
    def close(self):
        """Close all the resources."""
        ...

    @abstractmethod
    def finalize(self, index: 'Container'):
        """Finalize the Container.

        Perform operations of compactions, indexing, optimization, etc.
        """
        ...

    @abstractmethod
    def preload(self):
        """Preload the Container.

        The interface of Container is designed in such a way that (almost) all
        the operations are supported to be done lazily.
        Sometimes there is need to preload the storage without performing an
        operation that will cause an actual read / write access.
        """
        ...

    @classmethod
    def path_join(cls, *args: bytes, prefix: bytes = b'') -> bytes:
        """Join multiple paths.

        We do not need an separator as by design all the keys, therefore paths
        as well end with `PATH_SENTINEL`.
        """
        return prefix + b''.join(args)

    @abstractmethod
    def get(self, key: ContainerKey, default=None) -> ContainerValue:
        """Returns the value by the given `key` if it exists else `default`.

        The `default` is :obj:`None` by default.
        """
        ...

    @abstractmethod
    def __getitem__(self, key: ContainerKey) -> ContainerValue:
        """Returns the value by the given `key`."""
        ...

    @abstractmethod
    def set(self, key: ContainerKey, value: ContainerValue, *, store_batch=None):
        """Set a value for given key, optionally store in a batch.

        If `store_batch` is provided, instead of the `(key, value)` being added
        to the collection immediately, the operation is stored in a batch in
        order to be executed in a whole with other write operations. Depending
        on the :obj:`Conainer` implementation, this may feature transactions,
        atomic writes, etc.
        """
        ...

    @abstractmethod
    def __setitem__(self, key: ContainerKey, value: ContainerValue):
        """Set a value for given key."""
        ...

    @abstractmethod
    def delete(self, key: ContainerKey, *, store_batch=None):
        """Delete a key-value record by the given key,
        optionally store in a batch.

        If `store_batch` is provided, instead of the `(key, value)` being added
        to the collection immediately, the operation is stored in a batch in
        order to be executed in a whole with other write operations. Depending
        on the :obj:`Conainer` implementation, this may feature transactions,
        atomic writes, etc.
        """
        ...

    @abstractmethod
    def __delitem__(self, key: ContainerKey):
        """Delete a key-value record by the given key."""
        ...

    @abstractmethod
    def delete_range(self, begin: ContainerKey, end: ContainerKey, *, store_batch=None):
        """Delete all the records in the given `[begin, end)` key range."""
        ...

    @abstractmethod
    def batch(self):
        """Creates a new batch object to store operations in before executing
        using :obj:`Container.commit`.

        The operations :obj:`Container.set`, :obj:`Container.delete`,
        :obj:`Container.delete_range` are supported.

        See more at :obj:`Container.commit`
        """
        ...

    @abstractmethod
    def commit(self, batch):
        """Execute the accumulated write operations in the given `batch`.

        Depending on the :obj:`Container` implementation, this may feature
        transactions, atomic writes, etc.
        """
        ...

    @abstractmethod
    def items(self, prefix: ContainerKey = b'') -> Iterator[Tuple[ContainerKey, ContainerValue]]:
        """Iterate over all the key-value records in the prefix key range.

        The iteration is always performed in lexiographic order w.r.t keys.
        If `prefix` is provided, iterate only over those records that have key
        starting with the `prefix`.

        For example, if `prefix == b'meta.'`, and the Container consists of:
        `{
            b'e.y': b'012',
            b'meta.x': b'123',
            b'meta.z': b'x',
            b'zzz': b'oOo'
        }`, the method will yield `(b'meta.x', b'123')` and `(b'meta.z', b'x')`

        Args:
            prefix (:obj:`bytes`): the prefix that defines the key range
        """
        ...

    @abstractmethod
    def keys(self, prefix: ContainerKey = b'') -> Iterator[ContainerKey]:
        """Iterate over all the keys in the prefix range.

        The iteration is always performed in lexiographic order.
        If `prefix` is provided, iterate only over keys starting with
        the `prefix`.

        For example, if `prefix == b'meta.'`, and the Container consists of:
        `{
            b'e.y': b'012',
            b'meta.x': b'123',
            b'meta.z': b'x',
            b'zzz': b'oOo'
        }`, the method will yield `b'meta.x'` and `b'meta.z'`

        Args:
            prefix (:obj:`bytes`): the prefix that defines the key range
        """
        ...

    @abstractmethod
    def values(self, prefix: ContainerKey = b'') -> Iterator[ContainerValue]:
        """Iterate over all the values in the given prefix key range.

        The iteration is always performed in lexiographic order w.r.t keys.
        If `prefix` is provided, iterate only over those record values that have
        key starting with the `prefix`.

        For example, if `prefix == b'meta.'`, and the Container consists of:
        `{
            b'e.y': b'012',
            b'meta.x': b'123',
            b'meta.z': b'x',
            b'zzz': b'oOo'
        }`, the method will yield `b'123'` and `b'x'`

        Args:
            prefix (:obj:`bytes`): the prefix that defines the key range
        """
        ...

    @abstractmethod
    def view(self, prefix: ContainerKey = b'') -> 'Container':
        """Return a view (even mutable ones) that enable access to the container
        but with modifications.

        Args:
            prefix (:obj:`bytes`): the prefix that defines the key range of the
                view-container. The resulting container will share an access to
                only records in the `prefix` key range, but with `prefix`-es
                stripped from them.

                For example, if the Container contents are:
                `{
                    b'e.y': b'012',
                    b'meta.x': b'123',
                    b'meta.z': b'x',
                    b'zzz': b'oOo'
                }`, then `container.view(prefix=b'meta.')` will behave (almost)
                exactly as an Container:
                `{
                    b'x': b'123',
                    b'z': b'x',
                }`
        """
        ...

    @abstractmethod
    def tree(self) -> 'TreeView':
        """Return a :obj:`TreeView` which enables hierarchical view and access
        to the container records.

        This is achieved by prefixing groups and using `PATH_SENTINEL` as a
        separator for keys.

        For example, if the Container contents are:
            `{
                b'e.y': b'012',
                b'meta.x': b'123',
                b'meta.z': b'x',
                b'zzz': b'oOo'
            }`, and the path sentinel is `b'.'` then `tree = container.tree()`
            will behave as a (possibly deep) dict-like object:
            `tree[b'meta'][b'x'] == b'123'`
        """
        ...

    @abstractmethod
    def walk(self, prefix: ContainerKey = b''):
        """A bi-directional generator to walk over the collection of records on
        any arbitrary order. The `prefix` sent to the generator (lets call it
        a `walker`) seeks for lower-bound key in the collection.

        In other words, if the Container contents are:
        `{
            b'e.y': b'012',
            b'meta.x': b'123',
            b'meta.z': b'x',
            b'zzz': b'oOo'
        }` and `walker = container.walk()` then:
        `walker.send(b'meta') == b'meta.x'`, `walker.send(b'e.y') == b'e.y'`
        """
        ...

    @abstractmethod
    def next_key(self, key: ContainerKey = b'') -> ContainerKey:
        """Returns the key that comes (lexicographically) right after the
        provided `key`.
        """
        ...

    @abstractmethod
    def next_value(self, key: ContainerKey = b'') -> ContainerValue:
        """Returns the value for the key that comes (lexicographically) right
        after the provided `key`.
        """
        ...

    @abstractmethod
    def next_key_value(self, key: ContainerKey = b'') -> Tuple[ContainerKey, ContainerValue]:
        """Returns `(key, value)` for the key that comes (lexicographically)
        right after the provided `key`.
        """
        ...

    @abstractmethod
    def prev_key(self, key: ContainerKey = b'') -> ContainerKey:
        """Returns the key that comes (lexicographically) right before the
        provided `key`.
        """
        ...

    @abstractmethod
    def prev_value(self, key: ContainerKey = b'') -> ContainerValue:
        """Returns the value for the key that comes (lexicographically) right
        before the provided `key`.
        """
        ...

    @abstractmethod
    def prev_key_value(self, key: ContainerKey = b'') -> Tuple[ContainerKey, ContainerValue]:
        """Returns `(key, value)` for the key that comes (lexicographically)
        right before the provided `key`.
        """
        ...
