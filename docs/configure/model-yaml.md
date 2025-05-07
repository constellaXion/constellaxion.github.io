---
sidebar_position: 1
---
# Model YAML

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `model.yaml` file is the heart of every Constellaxion project. It defines what model you’re using, what dataset to train on (if any), and where to deploy it.


After you run:
```sh
constellaxion init
```

Once initialized, Constellaxion generates a job.json file based on your model.yaml.

---

## 📂 Example: Deployment Only (No Training)
<Tabs groupId="cloud-provider">
  <TabItem value="aws" label="AWS">
  ```yaml
  model:
    id: cxn-foundation-model
    base: tiiuae/falcon-7b-instruct
  deploy:
    aws:
      region: us-east-1
  ```
  </TabItem>
  <TabItem value="gcp" label="GCP">
  ```yaml
  model:
    id: cxn-foundation-model
    base: tiiuae/falcon-7b-instruct
  deploy:
    gcp:
      project_id: my-gcp-project
      region: europe-west2
  ```
  </TabItem>
</Tabs>

---

## 📂 Example: Fine-Tuning
<Tabs groupId="cloud-provider">
  <TabItem value="aws" label="AWS">
  ```yaml
  model:
    id: crypto-sentiment-v2
    base: tiiuae/falcon-7b-instruct
  dataset:
    train: ./train.csv
    val: ./val.csv
    test: ./test.csv
  training:
    epochs: 1
    batch_size: 16
  deploy:
    aws:
      region: eu-west-2
  ```
  </TabItem>
  <TabItem value="gcp" label="GCP">
  ```yaml
  model:
    id: crypto-sentiment-v2
    base: tiiuae/falcon-7b-instruct
  dataset:
    train: ./train.csv
    val: ./val.csv
    test: ./test.csv
  training:
    epochs: 1
    batch_size: 16
  deploy:
    gcp:
      project_id: my-gcp-project
      region: europe-west2
  ```
  </TabItem>
</Tabs>

This version includes local dataset files and training configuration for fine-tuning a base model.

---

## 🔍 Field Reference

### model
**id** *string* - The unique label for this project or experiment.

**base** *string* - The Hugging Face model ID used as the starting point for deployment or fine-tuning.

### dataset (required if fine-tuning)
- Paths to your local training, validation, and test datasets (CSV format)
- All CSVs must have two columns: prompt and response
```yaml
dataset:
  train: ./train.csv
  val: ./val.csv
  test: ./test.csv
```

### training (required if fine-tuning)
Configuration for fine-tuning. This section is required if dataset is present.
```yaml
training:
  epochs: 1
  batch_size: 16
```
You can extend this section with additional parameters in the future (e.g., learning rate, optimizer, etc.)


### deploy
Describes where and how to deploy the model.
```yaml
deploy:
  gcp:
    project_id: my-gcp-project
    region: europe-west2
```


**project_id** *string (required if gcp)* - Your GCP project ID

**region** *string* - Region where the model will be deployed

---

## 📌 Notes
- model.yaml is user-authored and committed to version control
- job.json is generated from it and should not be edited manually
- If you edit model.yaml, run constellaxion init again to refresh your project state


## 🔗 Related Pages
- [Get Started](https://constellaxion.github.io/index.html)
- [Job.json Reference](https://constellaxion.github.io/job_json.md)
- [Fine-Tuning Guide](https://constellaxion.github.io/fine-tuning-guide)