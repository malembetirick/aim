import React from 'react';

import Table from 'components/Table/Table';
import useTextSearch from 'components/kit/DataList/SearchBar/useTextSearch';
import BusyLoaderWrapper from 'components/BusyLoaderWrapper/BusyLoaderWrapper';

import SearchBar from './SearchBar';
import { IDataListProps } from './DataList.d';

import './DataList.scss';

/**
 * @property {any} tableColumns - columns
 * @property {any} tableData - rows
 * @property {string[]} searchableKeys - additional class name (optional)
 * @property {IIllustrationConfig} illustrationConfig - illustration config
 * @property {boolean} isLoading - data is loading
 * @property {boolean} withoutSearchBar - show search bar
 * @property {React.RefElement} tableRef - ref
 */

function DataList({
  tableRef,
  tableData,
  isLoading,
  tableColumns,
  withSearchBar = true,
  searchableKeys,
  illustrationConfig,
}: IDataListProps): React.FunctionComponentElement<React.ReactNode> {
  const textSearch = useTextSearch({
    rawData: tableData,
    updateData,
    searchableKeys,
  });

  function getHighlightedData(data: any[], regex: RegExp | null) {
    const searchableKeysList = searchableKeys ?? Object.keys(data[0] ?? {});
    const index = searchableKeysList.indexOf('key');
    if (index > -1) {
      searchableKeysList.splice(index, 1);
    }
    return data.map((item) => {
      const highlightedItem: any = {};
      searchableKeysList.forEach((searchableKey: string) => {
        const reg = new RegExp(regex?.source ?? '', regex?.flags);
        highlightedItem[searchableKey] =
          regex === null
            ? item[searchableKey]
            : item[searchableKey]
                .split(regex)
                .filter((part: string) => part !== '')
                .map((part: string, i: number) => {
                  return reg.test(part) ? (
                    <span key={part + i} className='DataList__mark'>
                      {part}
                    </span>
                  ) : (
                    part
                  );
                });
      });
      return {
        ...item,
        ...highlightedItem,
      };
    });
  }

  function updateData(data: any[], regex: RegExp | null) {
    tableRef.current?.updateData({ newData: getHighlightedData(data, regex) });
  }
  return (
    <div className={'DataList'} style={{ height: '100vh' }}>
      {withSearchBar && (
        <SearchBar
          isValidInput={textSearch.filterOptions.isValidSearch}
          searchValue={textSearch.filterOptions.searchValue}
          matchType={textSearch.filterOptions.matchType}
          onMatchTypeChange={textSearch.changeMatchType}
          onInputClear={textSearch.clearSearchInputData}
          onInputChange={textSearch.changeSearchInput}
          isDisabled={!!isLoading}
        />
      )}
      <BusyLoaderWrapper
        className='VisualizationLoader'
        isLoading={!!isLoading}
      >
        {textSearch.data && (
          <Table
            ref={tableRef}
            fixed={false}
            className='DataList__textsTable'
            columns={tableColumns}
            data={getHighlightedData(
              textSearch.data,
              textSearch.filterOptions.appliedRegExp,
            )}
            isLoading={isLoading}
            hideHeaderActions
            estimatedRowHeight={32}
            headerHeight={32}
            illustrationConfig={illustrationConfig}
            height='100%'
            disableRowClick
          />
        )}
      </BusyLoaderWrapper>
    </div>
  );
}

DataList.displayName = 'DataList';

export default React.memo<IDataListProps>(DataList);
