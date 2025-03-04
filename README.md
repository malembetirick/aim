<div align="center">
  <img src="https://user-images.githubusercontent.com/13848158/154338760-edfe1885-06f3-4e02-87fe-4b13a403516b.png">
  <h3>An easy-to-use & supercharged open-source experiment tracker</h3>
  Aim logs your training runs, enables a beautiful UI to compare them and an API to query them programmatically.
</div>

<br/>

<img src="https://user-images.githubusercontent.com/13848158/154338753-34484cda-95b8-4da8-a610-7fdf198c05fd.png">

<p align="center">
  <a href="#about-aim"><b>About</b></a> &bull;
  <a href="#why-use-aim"><b>Features</b></a> &bull;
  <a href="#demos"><b>Demos</b></a> &bull;
  <a href="https://github.com/aimhubio/aim/tree/main/examples"><b>Examples</b></a> &bull;
  <a href="#quick-start"><b>Quick Start</b></a> &bull;
  <a href="https://aimstack.readthedocs.io/en/latest/"><b>Documentation</b></a> &bull;
  <a href="#roadmap"><b>Roadmap</b></a> &bull;
  <a href="https://slack.aimstack.io/"><b>Slack Community</b></a> &bull;
  <a href="https://twitter.com/aimstackio"><b>Twitter</b></a>
</p>

<div align="center">
  
  [![Platform Support](https://img.shields.io/badge/platform-Linux%20%7C%20macOS-blue)]()
  [![PyPI - Python Version](https://img.shields.io/pypi/pyversions/aim)](https://pypi.org/project/aim/)
  [![PyPI Package](https://img.shields.io/pypi/v/aim?color=yellow)](https://pypi.org/project/aim/)
  [![License](https://img.shields.io/badge/License-Apache%202.0-orange.svg)](https://opensource.org/licenses/Apache-2.0)
  [![PyPI Downloads](https://img.shields.io/pypi/dw/aim?color=green)](https://pypi.org/project/aim/)
  [![Issues](https://img.shields.io/github/issues/aimhubio/aim)](http://github.com/aimhubio/aim/issues)
  
</div>

<div align="center">
  <sub>Integrates seamlessly with your favorite tools</sub>
  <br/>
  <br/>
  <img src="https://user-images.githubusercontent.com/13848158/155354389-d0301620-77ea-4629-a743-f7aa249e14b5.png" width="60" />
  <img src="https://user-images.githubusercontent.com/13848158/155354496-b39d7b1c-63ef-40f0-9e59-c08d2c5e337c.png" width="60" />
  <img src="https://user-images.githubusercontent.com/13848158/155354380-3755c741-6960-42ca-b93e-84a8791f088c.png" width="60" />
  <img src="https://user-images.githubusercontent.com/13848158/155354342-7df0ef5e-63d2-4df7-b9f1-d2fc0e95f53f.png" width="60" />
  <img src="https://user-images.githubusercontent.com/13848158/155354392-afbff3de-c845-4d86-855d-53df569f91d1.png" width="60" />
  <img src="https://user-images.githubusercontent.com/13848158/155354355-89210506-e7e5-4d37-b2d6-ad3fda62ef13.png" width="60" />
  <img src="https://user-images.githubusercontent.com/13848158/155354397-8af8e1d3-4067-405e-9d42-1f131663ed22.png" width="60" />
  <br/>
  <img src="https://user-images.githubusercontent.com/13848158/155354513-f7486146-3891-4f3f-934f-e58bbf9ce695.png" width="60" />
  <img src="https://user-images.githubusercontent.com/13848158/155354500-c0471ce6-b2ce-4172-b9e4-07a197256303.png" width="60" />
  <img src="https://user-images.githubusercontent.com/13848158/155354361-9f911785-008d-4b75-877e-651e026cf47e.png" width="60" />
  <img src="https://user-images.githubusercontent.com/13848158/155354373-1879ae61-b5d1-41f0-a4f1-04b639b6f05e.png" width="60" />
  <img src="https://user-images.githubusercontent.com/13848158/155354483-75d9853f-7154-4d95-8190-9ad7a73d6654.png" width="60" />
  <img src="https://user-images.githubusercontent.com/13848158/155354329-cf7c3352-a72a-478d-82a7-04e3833b03b7.png" width="60" />
  <img src="https://user-images.githubusercontent.com/13848158/155354349-dcdf3bc3-d7a9-4f34-8258-4824a57f59c7.png" width="60" />
  <img src="https://user-images.githubusercontent.com/13848158/155354471-518f1814-7a41-4b23-9caf-e516507343f1.png" width="60" />
</div>

<div align="center">
  <br/>
  <kbd>
    <img width="650px" src="https://user-images.githubusercontent.com/13848158/136374529-af267918-5dc6-4a4e-8ed2-f6333a332f96.gif" />
  </kbd>
</div>

# About Aim

| Track and version ML runs | Visualize runs via beautiful UI | Query runs metadata via SDK |
|:--------------------:|:------------------------:|:-------------------:|
| <img width="600px" src="https://user-images.githubusercontent.com/13848158/154337794-e9310239-6614-41b3-a95b-bb91f0bb6c4f.png"> | <img width="600px" src="https://user-images.githubusercontent.com/13848158/154337788-03fe5b31-0fa3-44af-ae79-2861707d8602.png"> | <img width="600px" src="https://user-images.githubusercontent.com/13848158/154337793-85175c78-5659-4dd0-bb2d-05017278e2fa.png"> |

Aim is an open-source, self-hosted ML experiment tracking tool. 
It's good at tracking lots (1000s) of training runs and it allows you to compare them with a performant and beautiful UI.

You can use not only the great Aim UI but also its SDK to query your runs' metadata programmatically. 
That's especially useful for automations and additional analysis on a Jupyter Notebook.


Aim's mission is to democratize AI dev tools.

# Why use Aim?

### Compare 100s of runs in a few clicks - build models faster

- Compare, group and aggregate 100s of metrics thanks to effective visualizations.
- Analyze, learn correlations and patterns between hparams and metrics.
- Easy pythonic search to query the runs you want to explore.

### Deep dive into details of each run for easy debugging

- Hyperparameters, metrics, images, distributions, audio, text - all available at hand on an intuitive UI to understand the performance of your model.
- Easily track plots built via your favourite visualisation tools, like plotly and matplotlib.
- Analyze system resource usage to effectively utilize computational resources.

### Have all relevant information organised and accessible for easy governance

- Centralized dashboard to hollistically view all your runs, their hparams and results.
- Use SDK to query/access all your runs and tracked metadata.
- You own your data - Aim is open source and self hosted.

# Demos

| Machine translation | lightweight-GAN |
|:---:|:---:|
| <a href="http://play.aimstack.io:10001/metrics?grouping=4HcJmKT5JnSwv7LkC1BKsJsn1skWP1sFqUdENis5qW6owYiXZKAxP3UNhhEE6poeMFVLG1g9SA5zb18NzLWqUf7vraoDSRsVf6XNqvckzdQqWAsYsTk52xB4L83hYdgmXMqHD4zunL2AhCoNyDiqWkopHupENeUfAKyHXhKctp8Rt8RCTSznBZLMDWhrS4nyCxshjQEHpV74JjGtD6GPqwPJGqCf1p9jcP6NwLDz3Bbp7Mo7TuCioeqaUEHNLeWBhTspmzh3888ZjPAinVbF54hhHUGpUvDygYEtfxqtvBF3pzYE7h3YXBNwEGpmAMSihWmGsqsHwhxk73oetrACSCiKC9iTPuihhFwdXHLShiEQceqYn4ywMYaouR6Dzz5wpp8GYjnfMu69td1KHeNECqFN5bumn2eJJwa7a9UTLU96qG4aq82caTuDZMM&chart=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"> <img width="800px" src="https://user-images.githubusercontent.com/13848158/154340796-c9e91b13-8ee0-4a67-bcde-8cf3aaa7ba99.jpg"> </a> | <a href="http://play.aimstack.io:10002/images?grouping=E1zQzcmtDR3wibEa1MVysTvCyZEv1T8ixkCxTWExCyMnHtX2HyiF9eszvPgfd2xdJ5TUTKGpSs1bsLVq5tHAV3uWtsZmmckn6HjNtVCMyQDJpwhiEy5tAyw&select=2NEXuD7fFoaLcwRjymjA1wLmUrGs9s3AiXcCW82C367SwJt18CAB6xzkMGowrUDuDwggE1huaPVcQJpQUsmAQx1CnGiqCUBp2jPMd5mMNPX2QKQMcmvu9ZykBNkeBvCQFPd9ERuQD2g1EjWuvyJ3H53mAZTfp94LCXvR9CUsG5ei2CjQUzfZLM6DCyUr1GPaEVnY5f1EwzicNxXuoutkBgqCqaobJ7Do4q4eHAA6ooiWU6ekS3D2sLj6qYwhVTjfGCPfbWwBiH83nFkY3fLExzdeTY2zeUHeeYikQR9S7xHbVD8WvjekdQVp8X4dNLJZxiVmEqHpPRnU3ZrYsMhE7yFAAgjJwPNUzLTt6YFrtZBcmc4rwAC2oyrqysUSEr6gzL6LcJ6yuqDGf9D5tzftHbTLDkhc8B2sCgTS&images=9vt2MvuQj2Q7jxGQYhNH6ZnWw4CsEzubFcFotuqCHfzvuruDs6pyWfhqhinD4hCiYsAURXgJbmq2L5z4vEQMbrE7iTy8XHNndPBPyuCEvRpxGwwFkukX3YGkVhNDQmUPtBagKbsMAgUASJM8hFtKboqbu9KWTModsjd4Qag7aL1KbJCzBYmZLCpKMSf6eKUTQtfwLLWbgquEx6oahAoSujV6aZ5cjsjN4JdGtPbicySpccgLDQHaQYTHCseA6sPVaEwCsoQDJAcTnjEVFFUUUW5HbPkrNgeRKb8M9pxudrweRQ3gNukLx5yizxQKrmcKU7saxLraqYUA2y5LmEQohsWGUq8sKkvGDH6oNLx2ytJsdVM5PGieENXMAaPg3KuWYXXTwixzwscdDsHSWeiXTGj1QxUKiBCnfwkZ7pZbYMCSgczSn9WpwygrKhb2znSYhn4gFzCsdjiXPPDv9LpPzkFVbsMCvk1CadqpwxTfxNmteKm7CQVViyCrvheGAk5rKpPzaBc5agyvfKpUqgRarxojnG8a4s1Y7qFT1rNVSC13C9h5fG54dDoFHxDyvej3bVTMDYsAiie3eVA3yEskyBGwApPNtjLY2H4b9jTmR3V7jnA9moFGfwMiXUjt8eoJsWTNkqBdRGSnqdva8zi5bApQaggnLebgCRpK1g8VvPrVS3ABQC8aMZJ2vibebHePWs1ahWZ2AXUUYwcuSRkiUWHwgtG9U1x6rR41UxFFNvW9rpDsU99DWzYpdgxfU75wTEPb2qeXYPxV1zVt5ixcFfA3Lvtsp5XXyfHY9FaNFeKKzAUQXPAkMWG4yH4Tp5me8Nt4puBC4pvJrboVcQdSsYhtxj2YwUjzN7Jyn9BV28dtRFPdtFUUc9pKpLvhZAD6XPDtKqrN3pG3LwYTKAiMDtC6tHvDqhQGuJGQZH5cVyTKkT48Xup4znass8tJxUJwacVQa6x2ewyd8AXCfc4j9bPQssabADmc1ho5Eghn5qe82cEcyG1okdfBCRMfmZ5EeCeKQYmoXddxM2cAwfJzCzG9bGtaMvXk3VV8TrSiRKjg3Exbftv8gx12QAzoBP9zosuULFpEAPZF1TvHJbEUmYgu9gwuRTAS3qYiywB7dsCq8wsTr7qmwt8WFFucpte8WvrkRGYy1GA7bD6uPhvS6sr1Wv259oB7Tkr5kirMo6Vdkz8ex9zVd4h2AP1J1dy8cqXaSk5B3HTZ6n1qdAMt4faLtt8SNqg4EqcvXx6r2J1czzXAPa9oSseYifvedcMyxnWkcTvno4QA6sp6zH25ubEwPAVzZZk35nNoJPasH3PgEgLafGPLCsPDD2sku5djPjfqkbDLUWMYm7BbTr7xK8v4UoTS485rPiF6VKoNQSuEnKQMT3uNRTS4EXNMjyRfUs4gk1217EhGVLhfqiZQyG4gqEhcJE3phLydLskk36PyGEbyFyvigjwvrK6boJnFpesze6Czc13HdWbWp6LHLseYujigdmdktU6EQb5KmghstmJ9gUF14JVPjYP57xtv19UT8XDuaJfwJn9z3U17ZDFnQ5zbXKSwD9ikMEd6VFo1xLBRHSmRdFSqcC96s23qWmMhheGtv6tTQAkq7CB1J1gy3skuFJXqhs1RvFWbFFUCLmHeTCtskEsQVP5Rkzat5Jn3QtSqCiRpEGc9Ykd5bWFAaqoudGcqEt993tVfVS3ZrVKAa6NDmbtAcdnfsUZxDt2muRPJDNVCBNW5k8XvevMpMsL3uCETtdutufp1VyLur2Yyx5WA8AeeFeDBxRxad3ZHbH27XdMpxWHF26hnbQAewspG1weRpVW9Ebc4Lc53RBeu8gVmTbKydrri1FHaYySZqCxht8bN4kdqSmkymmcTN3cfRN9DmzcmfKG6GbTDeCA9oXz5cVqrGXZcAiaj1oinnByW7W8GwhtK1Tzd7LG74Nu35DUdPCJXMH2ug4SEa3yXERXCaLvAHvFZAS89e7RUPpr3nTTrQLurjHSdkJ39pwEJpDcDjeWHsJSmTG1x195e6xvMmgPxAZd3Lzyk8Cxme8p1cY7FehSbTPc3zAAwi9LDGYyoQRcdbRHPLJ2W8rt9KeNfNq9moa1RVFPCPvhGuuyycT4f4QkP4Nvy4iUCaB5d8B1hcgmtg2X9Zpg6GUR32RYneQigK6S9ZYPNnaFeCNZZrwaYjkDpKMTMB6N24JC1TEAH8en3kXzf8CpLWeJpxoyB3hcCxjFHLYaovzgfGPeFBPY6ADDUcT3xkpUUEybdxE1cX7drHvBwyGqeU5g7i424tydxqufUgPY5sF9bM6mdoA3AvqDD9B3Zai71irxYXX8e6rRck4RwptJgBMX2gbotizoz9LrUwFQ2naBfJvbfEhZNCzME8a7H2YiVcq4Z6pkfbT1uMLfaixfw8nQCzVRbJAyVZgGzVbBj242LpD48R6VmxGcU5t2XkN8hZyYdBk1Uds9QyUG9VpC8ka7HjkvxBMknk6v4BjMnHnAj4ZxDUxMWEDbWw6iWD3iYWzVn3n5dzRcAqCQv3m2ZUnwuHHCTVJVZKZVyxrFP5eznpNv87RUXMfjbXypoLJFVtMoq81y82hYRFSkbAUwzhhoXBAGeBGDmDcwky2Hf7ZmfkzDLnRke916VxhTRLr8c6nXokCn8xwweuJHFeBqx7D88gpRbn5RrnH33545zyzyNpZpabQUGY3L7G3QznVw6wCS9x7FMixW2mgCeeWFhPDiz5Kz6DyyjaT413VSoRBCRakNcitYHUXqqCUPsFmZ3LTedA8jN99fYzse5LX36TSVbjnM7XmiZ8vNoH5mUsawmvG7NXbhgoyhx4rzL7t57A4g7sQg4YhGAFzEbXrh416riiPH8r52on2VEqkjNPDnybSg3cwuR6rPfMWA7YoyEAp14aStUPaKqbM9omConMxZde5o2DpjS86G5vDBY1o7F4LnBHLHRxKfqAkTPjvEdhaYY2uY6i598po9b2fAtpUGCbXnzcNrV5Vei5WkiQAqRT6whGr29PTLsAVGed71drx7BqzNiDcFJBL9dVrVoPqYLvrYVGi89MuuWuirD7CRhXWahysjrNpFf4aHXmuXS3UD7SFgkqAZzL1hrVq77K8UhGMMWLUzE9gjP6PH4xL6fJetKaRGZNpbsqDoKuBkBAk9j1nGpYMAyuo2H2AWUyj8PUgAbi1e4KPeqNqMVT85oZ9jkCggYczgNhT8gw5QsMarouMctMdbokxRfxz2xt9r2DuNmbEmq9e13Tqv94VrzR91R2o7pvH7YUFtJvcoJwR8K5jyof5SfKHT53zaBKxkLfCpPP3qR9ZCbAzVbreFKsQnCcZpd643VA9wtgKXxc375NwKj4QbnvafKNU9qc455d3S3o57mU4DFA7yHSqY1q41zySxfXYx4txL4TiqeyyTQu7KcHYbTUYRs69pkE1rWRW84N1qmisw2o7iLQPrhWkixrRDRk5toYWQg6ZDZExCyedYBGjsUAut"> <img width="800px" src="https://user-images.githubusercontent.com/13848158/154340790-bc7b7a21-e8a1-43a1-809d-4060b5bfb60f.jpg"> </a> |
| Training logs of a neural translation model(from WMT'19 competition). | Tranining logs of 'lightweight' GAN, proposed in ICLR 2021. |

| FastSpeech 2 | Simple MNIST |
|:---:|:---:|
| <a href="http://play.aimstack.io:10003/runs/7f083da898624a2c98e0f363/distributions"> <img width="800px" src="https://user-images.githubusercontent.com/13848158/154340778-dbe19620-2f27-4298-b0cb-caf3904760f1.jpg"> </a> | <a href="http://play.aimstack.io:10004/runs/d9e89aa7875e44b2ba85612a/audios"> <img width="800px" src="https://user-images.githubusercontent.com/13848158/154340785-a7e4d9fd-d048-4207-8cd1-c4edff9cca6a.jpg"> </a> |
| Training logs of Microsoft's "FastSpeech 2: Fast and High-Quality End-to-End Text to Speech". | Simple MNIST training logs. |

# Quick Start

Follow the steps below to get started with Aim.

**1. Install Aim on your training environment**

```shell
pip3 install aim
```

**2. Integrate Aim with your code**

```python
from aim import Run

# Initialize a new run
run = Run()

# Log run parameters
run["hparams"] = {
    "learning_rate": 0.001,
    "batch_size": 32,
}

# Log metrics
for i in range(10):
    run.track(i, name='loss', step=i, context={ "subset":"train" })
    run.track(i, name='acc', step=i, context={ "subset":"train" })
```

_See the full list of supported trackable objects(e.g. images, text, etc) [here](https://aimstack.readthedocs.io/en/latest/quick_start/supported_types.html)._

**3. Run the training as usual and start Aim UI**

```shell
aim up
```

**4. Or query runs programmatically via SDK**

```python
from aim import Repo

my_repo = Repo('/path/to/aim/repo')

query = "metric.name == 'loss'" # Example query

# Get collection of metrics
for run_metrics_collection in my_repo.query_metrics(query).iter_runs():
    for metric in run_metrics_collection:
        # Get run params
        params = metric.run[...]
        # Get metric values
        steps, metric_values = metric.values.sparse_numpy()
```

# Integrations

<details>
<summary>
  Integrate PyTorch Lightning
</summary>

```python
from aim.pytorch_lightning import AimLogger

# ...
trainer = pl.Trainer(logger=AimLogger(experiment='experiment_name'))
# ...
```

_See documentation [here](https://aimstack.readthedocs.io/en/latest/guides/integrations/basic_aim_pytorch_lightning.html)._

</details>

<details>
<summary>
  Integrate Hugging Face
</summary>

```python
from aim.hugging_face import AimCallback

# ...
aim_callback = AimCallback(repo='/path/to/logs/dir', experiment='mnli')
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset if training_args.do_train else None,
    eval_dataset=eval_dataset if training_args.do_eval else None,
    callbacks=[aim_callback],
    # ...
)
# ...
```

_See documentation [here](https://aimstack.readthedocs.io/en/latest/guides/integrations/basic_aim_huggingface.html)._

</details>

<details>
<summary>
  Integrate Keras & tf.keras
</summary>

```python
import aim

# ...
model.fit(x_train, y_train, epochs=epochs, callbacks=[
    aim.keras.AimCallback(repo='/path/to/logs/dir', experiment='experiment_name')
    
    # Use aim.tensorflow.AimCallback in case of tf.keras
    aim.tensorflow.AimCallback(repo='/path/to/logs/dir', experiment='experiment_name')
])
# ...
```

_See documentation [here](https://aimstack.readthedocs.io/en/latest/guides/integrations/basic_aim_keras.html)._

</details>

<details>
<summary>
  Integrate XGBoost
</summary>

```python
from aim.xgboost import AimCallback

# ...
aim_callback = AimCallback(repo='/path/to/logs/dir', experiment='experiment_name')
bst = xgb.train(param, xg_train, num_round, watchlist, callbacks=[aim_callback])
# ...
```

_See documentation [here](https://aimstack.readthedocs.io/en/latest/guides/integrations/basic_aim_xgboost.html)._
</details>

# Comparisons to familiar tools

### Tensorboard
**Training run comparison**

Order of magnitude faster training run comparison with Aim
- The tracked params are first class citizens at Aim. You can search, group, aggregate via params - deeply explore all the tracked data (metrics, params, images) on the UI.
- With tensorboard the users are forced to record those parameters in the training run name to be able to search and compare. This causes a super-tedius comparison experience and usability issues on the UI when there are many experiments and params. **TensorBoard doesn't have features to group, aggregate the metrics**

**Scalability**

- Aim is built to handle 1000s of training runs - both on the backend and on the UI.
- TensorBoard becomes really slow and hard to use when a few hundred training runs are queried / compared.

**Beloved TB visualizations to be added on Aim**

- Embedding projector.
- Neural network visualization.

### MLFlow
MLFlow is an end-to-end ML Lifecycle tool.
Aim is focused on training tracking.
The main differences of Aim and MLflow are around the UI scalability and run comparison features.

**Run comparison**

- Aim treats tracked parameters as first-class citizens. Users can query runs, metrics, images and filter using the params.
- MLFlow does have a search by tracked config, but there are no grouping, aggregation, subplotting by hyparparams and other comparison features available.

**UI Scalability**

- Aim UI can handle several thousands of metrics at the same time smoothly with 1000s of steps. It may get shaky when you explore 1000s of metrics with 10000s of steps each. But we are constantly optimizing!
- MLflow UI becomes slow to use when there are a few hundreds of runs.

### Weights and Biases

Hosted vs self-hosted
- Weights and Biases is a hosted closed-source MLOps platform.
- Aim is self-hosted, free and open-source experiment tracking tool.

# Roadmap

## Detailed Sprints

:sparkle: The [Aim product roadmap](https://github.com/orgs/aimhubio/projects/3)

- The `Backlog` contains the issues we are going to choose from and prioritize weekly
- The issues are mainly prioritized by the highly-requested features

## High-level roadmap

The high-level features we are going to work on the next few months

### Done
  - [x] Live updates (Shipped: _Oct 18 2021_)
  - [x] Images tracking and visualization (Start: _Oct 18 2021_, Shipped: _Nov 19 2021_)
  - [x] Distributions tracking and visualization (Start: _Nov 10 2021_, Shipped: _Dec 3 2021_)
  - [x] Jupyter integration (Start: _Nov 18 2021_, Shipped: _Dec 3 2021_)
  - [x] Audio tracking and visualization (Start: _Dec 6 2021_, Shipped: _Dec 17 2021_)
  - [x] Transcripts tracking and visualization (Start: _Dec 6 2021_, Shipped: _Dec 17 2021_)
  - [x] Plotly integration (Start: _Dec 1 2021_, Shipped: _Dec 17 2021_)
  - [x] Colab integration (Start: _Nov 18 2021_, Shipped: _Dec 17 2021_)
  - [x] Centralized tracking server (Start: _Oct 18 2021_, Shipped: _Jan 22 2022_)
  - [x] Tensorboard adaptor - visualize TensorBoard logs with Aim (Start: _Dec 17 2021_, Shipped: _Feb 3 2022_)
  - [x] Track git info, env vars, CLI arguments, dependencies (Start: _Jan 17 2022_, Shipped: _Feb 3 2022_)
  - [x] MLFlow adaptor (visualize MLflow logs with Aim) (Start: _Feb 14 2022_, Shipped: _Feb 22, 2022_)
  - [x] Activeloop Hub integration (Start: _Feb 14 2022_, Shipped: _Feb 22, 2022_)
  - [x] PyTorch-Ignite integration (Start: _Feb 14 2022_, Shipped: _Feb 22, 2022_)
  - [x] Run summary and overview info(system params, CLI args, git info, ...) (Start: _Feb 14 2022_, Shipped: _Mar 9, 2022_)
  - [x] Add DVC related metadata into aim run (Start: _Mar 7 2022_, Shipped: _Mar 26, 2022_)

### In Progress
  - [ ] Ability to attach notes to Run from UI (Start: _Mar 7 2022_)
  - [ ] Cloud storage support – store runs blob(e.g. images) data on the cloud (Start: _Mar 21 2022_)
  - [ ] Artifact storage – store files, model checkpoints, and beyond (Start: _Mar 21 2022_)

### To Do

**Aim UI**

- Runs management
    - Runs explorer – query and visualize runs data(images, audio, distributions, ...) in a central dashboard
    - Single run page
        - Run execution details(display stdout/stderr logs)
- Explorers
    - Audio Explorer
    - Text Explorer
    - Figures Explorer
    - Distributions Explorer
- Dashboards – customizable layouts with embedded explorers

**SDK and Storage**

- Scalability
    - Smooth UI and SDK experience with over 10.000 runs
    - Long sequences(up to 5M of steps) support
- Runs management
    - SDK interfaces
        - Reporting – query and compare runs, explore data with familiar tools such as matlpotlib and pandas
        - Manipulations – copy, move, delete runs, params and sequences
    - CLI interfaces
        - Reporting - runs summary and run details in a CLI compatible format
        - Manipulations – copy, move, delete runs, params and sequences

**Integrations**

- ML Frameworks:
    - Shortlist: MONAI, SpaCy, AllenNLP, LightGBM, Raytune, Fairseq, fast.ai, KerasTuner
- Datasets versioning tools
    - Shortlist: HuggingFace Datasets
- Resource management tools
    - Shortlist: Kubeflow, Slurm
- Workflow orchestration tools
- Others: Hydra, Google MLMD, Streamlit, ...

### On hold

- scikit-learn integration

## Community

### If you have questions

1. [Read the docs](https://aimstack.readthedocs.io/en/latest/)
2. [Open a feature request or report a bug](https://github.com/aimhubio/aim/issues)
3. [Join our slack](https://slack.aimstack.io/)
