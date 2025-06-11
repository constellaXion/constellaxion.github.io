---
sidebar_position: 1
---

# Tracking Project State

After you run:
```bash
constellaxion init
```

Constellaxion generates a `job.json` file that captures the complete state of your deployment or training workflow. This file is automatically referenced when running commands like `train`, `serve`, `deploy`, or `prompt`.

:::warning[Heads up!]
`job.json` is Constellaxion's memory of what you’re working on — don’t edit it manually unless you know what you’re doing.
:::

---

## 💡 job.json Explained

### Example 
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
        "region": "<your-region>",
        "bucket_name": "<your-bucket-name>",
        "staging_dir": "my-sentiment-llm/staging",
        "experiments_dir": "my-sentiment-llm/experiments",
        "model_path": "my-sentiment-llm/model",
        "service_account": "constellaxion-admin@<your-project-id>.iam.gserviceaccount.com"
    }
}
```

🔍 Field-by-Field Breakdown

---

### model
**model_id** *string* - The unique label for this project or experiment.

**base_model** *string* - The Hugging Face model ID used as the starting point for deployment or fine-tuning.

---

### dataset
Holds references to your dataset files, both locally and in cloud storage.

Each entry (train, val, test) has:

- **local** *string* - The path on your local file system (usually in the same directory as model.yaml)
- **cloud** *string* - The upload path inside your GCS bucket

These paths are used during job upload and training orchestration.

---

### training

This section only appears if you’re fine-tuning a model.

- **epochs** *int* - Number of epochs for training
- **batch_size** *int* - Batch size used in training
- **tensorboard_url** *string* (optional) - A link to the TensorBoard experiment tracking your training run, generated automatically on Vertex AI if applicable.

---

### deploy

This section configures your cloud deployment.

- **provider** *string* - The cloud backend used. Currently supports gcp. (Multi-cloud support coming soon.)
- **project_id** *string* - Your GCP project identifier.
- **region** *string* - GCP region where jobs run.
- **bucket_name** *string* - Your GCS bucket for model artifacts, datasets, logs.
- **staging_dir** *string* - Temp directory where data is uploaded before processing.
- **experiments_dir** *string* - Where logs, checkpoints, and metrics are saved during training.
- **model_path** *string* - Where the final trained model will be saved in GCS.
- **service_account** *string* - The service account used to launch Vertex AI jobs. Must have sufficient IAM permissions.

---

## 🧠 Why job.json Matters
- It keeps your commands short — no need to re-specify paths or settings
- It ensures reproducibility — your job context is recorded
- It’s updated incrementally — e.g., after train, new fields like tensorboard_url or checkpoints may be added

🛠️ Troubleshooting
- Missing field? Run `constellaxion init` again to regenerate.
- Wrong cloud config? Update your `model.yaml` and re-init.
- Multiple environments? Keep separate directories with their own `job.json` files.

## 🔗 Related Pages
- [Getting Started →](../../getting-started)
- [Setting up your model.yaml →](../model-yaml)
