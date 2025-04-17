---
title: Getting Started
layout: home
---

# 🚀 Get Started with Constellaxion

Constellaxion is a CLI tool for deploying and fine-tuning open-source models on your private cloud. Whether you’re working with foundation models or fine-tuning your own dataset, Constellaxion helps you go from config to cloud jobs with a single command.

## 📦 Installation

```bash
pip install constellaxion
```

## 🔧 Prerequisites

Constellaxion is designed to be cloud-agnostic, but each environment has its own setup.

To run on Google Cloud Platform (GCP):
- Your user account must have the roles/resourcemanager.projectIamAdmin role
- Enable the Vertex AI API
- [Service account setup details →](https://constellaxion.github.io/service-account.html)

{: .note }
AWS support is coming soon using the same YAML-based framework.


## 📁 Initializing a Project

To begin, create a directory with a model.yaml configuration file.

### For model deployment:
-	Only the model.yaml file is needed

### For fine-tuning:
-	Include train.csv, val.csv, and test.csv
- These CSVs should contain two columns: prompt, response

Then run:
```bash
constellaxion init
```

This generates a job.json file based on your model.yaml.

→ [Config file reference →](https://constellaxion.github.io/config-file-reference.html)
→ [Job.json explained →](https://constellaxion.github.io/job-json-explained.html)


## 🚀 Deploying a Foundation Model

To deploy a foundation model, run:
```bash
constellaxion model deploy
```

### Example model.yaml:
```yaml
model:
  id: cxn-foundation-model
  base: "tiiuae/falcon-7b-instruct"
deploy:
  gcp:
    project_id: osyris-staging
    location: europe-west2
```
→ [What happens under the hood →](https://constellaxion.github.io/what-happens-under-the-hood.html)

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
→ [Fine-tuning architecture →](https://constellaxion.github.io/fine-tuning-architecture.html)


## 💬 Prompting a Model

Chat directly with a deployed model using:
```bash
constellaxion model prompt
```

Your terminal becomes a chat window for the deployed model (defined in job.json).
Type exit to stop.

→ [How terminal chat works →](https://constellaxion.github.io/how-terminal-chat-works.html)

🧠 Supported Models

We are actively expanding support for more models and cloud environments.

→ [View supported models and platforms →](https://constellaxion.github.io/supported-models-and-platforms.html)
