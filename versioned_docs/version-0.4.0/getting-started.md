---
sidebar_position: 2
---

# Getting Started

Constellaxion is a CLI tool for deploying and fine-tuning open-source models on your private cloud. Whether you’re working with **foundation models** or **fine-tuning with your own dataset**, Constellaxion helps you go from config to cloud jobs in just a few commands.

- [Installation](#-installation)
- [Prerequisites](#-prerequisites)
- [Initializing a Project](#-initializing-a-project)
- [Deploying a Foundation Model](#-deploying-a-foundation-model)
- [Fine-Tuning a Model](#-fine-tuning-a-model)
- [Prompting a Model](#-prompting-a-model)

 ## 📦 Installation

```bash
pip install constellaxion
```

## 🔧 Prerequisites

Constellaxion is designed to be cloud-agnostic, but each environment has its own setup.

- [Set up Google Cloud Platform →](cloud-setup/gcp#-required-roles)
- [Set up Amazon Web Services →](cloud-setup/aws#-your-user-permissions)



## 📁 Initializing a Project

To begin, create a directory with a model.yaml configuration file.

### For model deployment:
-	Only the `model.yaml` file is needed

### For fine-tuning:
-	Include `train.csv`, `val.csv`, and `test.csv`
- These CSVs should contain two columns: `prompt`, `response`

Then run:
```bash
constellaxion init
```

 This generates a `job.json` file based on your `model.yaml`.

- [Setting up your model.yaml →](configure/model-yaml.md)
- [Tracking Project State →](configure/under-the-hood/job-json.md)


## 🌟 Deploying a Foundation Model

To deploy a foundation model, run:
```bash
constellaxion model deploy
```

### Example model.yaml for foundation model deployment:
```yaml
model:
  id: cxn-foundation-model
  base: "tiiuae/falcon-7b-instruct"
deploy:
  gcp:
    project_id: your-project-id
    location: europe-west2
```
[What happens under the hood →](configure/under-the-hood/job-json.md)

## 🎯 Fine-Tuning a Model

Train a model on your dataset with:
```bash
constellaxion model train
```
This kicks off a custom training job on Vertex AI using your local data and model base.

Then serve it with:
```bash
constellaxion model serve
```

### Example model.yaml for fine-tuning:
```yaml
model:
  id: crypto-sentiment-v2
  base: TinyLlama/TinyLlama-1.1B-intermediate-step-1431k-3T
dataset:
  train: ./train.csv
  val: ./val.csv
  test: ./test.csv
training:
  epochs: 1
  batch_size: 16
deploy:
  gcp:
    project_id: your-project-id
    location: us-central1
```


## 💬 Prompting a Model

Chat directly with a deployed model using:
```bash
constellaxion model prompt
```

Your terminal becomes a chat window for the deployed model (defined in `job.json`).
Type `exit` or `quit` to stop.


🧠 Supported Models

We are actively expanding support for more models and cloud environments.

[View supported models and platforms →](./supported.md)
