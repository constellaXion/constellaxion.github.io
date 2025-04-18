---
title: Job.json Explained
layout: default
---

# Job.json Explained

After you run:
```bash
constellaxion init
```

Constellaxion generates a job.json file that captures the complete state of your deployment or training workflow. This file is automatically referenced when running commands like train, serve, deploy, or prompt.

It’s your CLI’s memory of what you’re working on — don’t edit it manually unless you know what you’re doing.


## 💡 Example job.json
```json
{
    "model": {
        "model_id": "my-sentiment-llm",
        "base_model": "TinyLlama/TinyLlama-1.1B-intermediate-step-1431k-3T"
    },
    "dataset": {
        "train": {
            "local": "./train.csv",
            "cloud": "my-sentiment-llm/data/train.csv"
        },
        "val": {
            "local": "./val.csv",
            "cloud": "my-sentiment-llm/data/val.csv"
        },
        "test": {
            "local": "./test.csv",
            "cloud": "my-sentiment-llm/data/test.csv"
        }
    },
    "training": {
        "epochs": 1,
        "batch_size": 4,
        "tensorboard_url": "https://<tensorboard-url>"
    },
    "deploy": {
        "provider": "gcp",
        "project_id": "<your-project-id>",
        "location": "<your-region>",
        "bucket_name": "<your-bucket-name>",
        "staging_dir": "my-sentiment-llm/staging",
        "experiments_dir": "my-sentiment-llm/experiments",
        "model_path": "my-sentiment-llm/model",
        "service_account": "constellaxion-admin@<your-project-id>.iam.gserviceaccount.com"
    }
}
```

🔍 Field-by-Field Breakdown

### model
<dl>
	<dt>model_id</dt> 
  <dd>The unique label for this project or experiment.</dd>
	<dt>base_model</dt> 
  <dd>The Hugging Face model ID used as the starting point for deployment or fine-tuning.</dd>
</dl>

### dataset
Holds references to your dataset files, both locally and in cloud storage.

Each entry (train, val, test) has:
<dl>
	<dt>local</dt> 
  <dd>The path on your local file system (usually next to model.yaml)</dd>
	<dt>cloud</dt> 
  <dd>The upload path inside your GCS bucket</dd>
</dl>

These paths are used during job upload and training orchestration.

### training

This section only appears if you’re fine-tuning a model.
<dl>
	<dt>epochs</dt> 
  <dd>Number of epochs for training</dd>
	<dt>batch_size</dt> 
  <dd>Batch size used in training</dd>
	<dt>tensorboard_url (optional)</dt> 
  <dd>A link to the TensorBoard experiment tracking your training run, generated automatically on Vertex AI if applicable.</dd>
</dl>

### deploy

This section configures your cloud deployment.
<dl>
	<dt>provider</dt> 
  <dd>The cloud backend used. Currently supports gcp. (Multi-cloud support coming soon.)</dd>
	<dt>project_id</dt> 
  <dd>Your GCP project identifier.</dd>
	<dt>location</dt> 
  <dd>GCP region where jobs run.</dd>
	<dt>bucket_name</dt> 
  <dd>Your GCS bucket for model artifacts, datasets, logs.</dd>
	<dt>staging_dir</dt> 
  <dd>Temp directory where data is uploaded before processing.</dd>
	<dt>experiments_dir</dt> 
  <dd>Where logs, checkpoints, and metrics are saved during training.</dd>
	<dt>model_path</dt> 
  <dd>Where the final trained model will be saved in GCS.</dd>
	<dt>service_account</dt> 
  <dd>The service account used to launch Vertex AI jobs. Must have sufficient IAM permissions.</dd>
</dl>

## 🧠 Why job.json Matters
- It keeps your commands short — no need to re-specify paths or settings
- It ensures reproducibility — your job context is recorded
- It’s updated incrementally — e.g., after train, new fields like tensorboard_url or checkpoints may be added

🛠️ Troubleshooting
- Missing field? Run constellaxion init again to regenerate.
- Wrong cloud config? Update your model.yaml and re-init.
- Multiple environments? Keep separate directories with their own job.json files.

## 🔗 Related Pages
- [Get Started](https://constellaxion.github.io/index.html)
- [Model.yaml Reference](https://constellaxion.github.io/model-config-reference)
- [Fine-Tuning Guide](https://constellaxion.github.io/fine-tuning-guide)