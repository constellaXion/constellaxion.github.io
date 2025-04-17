---
title: Working with GCP
layout: default
---

# ☁️ Working with GCP

Constellaxion integrates seamlessly with Google Cloud Platform (GCP) to deploy and fine-tune open-source models via Vertex AI and Cloud Storage. This page outlines how the CLI tool interacts with GCP and how to set up your environment to use it.

## 🔄 What Constellaxion Does on GCP

When you run a command like model deploy, model train, or model serve, Constellaxion performs the following actions behind the scenes:
- Creates or uses a Vertex AI custom job
- Uses Cloud Storage to upload datasets or model artifacts
- Deploys models to Vertex AI Endpoints with custom containers
- Manages job metadata using service accounts

These actions require specific IAM permissions on your GCP project.

## ✅ Required Roles

Your user account (the one running the CLI) must be granted the following role:
- roles/resourcemanager.projectIamAdmin

This allows the CLI to create and configure service accounts and grant them the appropriate permissions.

### 📚 How to assign a role in GCP:

[👉 Granting IAM roles to a user](https://cloud.google.com/iam/docs/granting-changing-revoking-access#grant-single-role)

## ⚙️ Enabling Vertex AI

Constellaxion uses Vertex AI to handle model training and deployment jobs.

Before using it, you must enable the API in your project:

[👉 Enable the Vertex AI API](https://console.cloud.google.com/flows/enableapi?apiid=aiplatform.googleapis.com)

🛡️ Service Account Setup

Constellaxion creates a service account in your project named `constellaxion-admin@{project_id}.iam.gserviceaccount.com` and attaches the following roles:
- `roles/iam.serviceAccountUser`
- `roles/aiplatform.user`
- `roles/storage.admin`


## 🌍 Region Support

Constellaxion supports any region where Vertex AI is available. You specify the region in your model.yaml file under the deploy.gcp.location field.

### Example:
```yaml
deploy:
  gcp:
    project_id: my-project
    location: us-central1
```
[👉 AvailableVertex AI regions](https://cloud.google.com/vertex-ai/docs/general/locations)


## 🧪 Next Steps

Once GCP is set up:
1. Create your model directory with a `model.yaml` file
2. Run `constellaxion init`
3. You’re ready to deploy, fine-tune, and prompt your models 🚀

[👉 Back to Get Started](Get Started)
[👉 Model config reference](https://constellaxion.github.io/model-config-reference)