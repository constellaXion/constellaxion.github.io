---
sidebar_position: 2
---
# Working with GCP

export const policies = [
  {
    name: "roles/resourcemanager.projectIamAdmin",
    purpose: "To create and manage service accounts"
  },
  {
    name: "roles/aiplatform.user",
    purpose: "To create and manage Vertex AI resources"
  },
  {
    name: "roles/storage.admin",
    purpose: "To read/write training data and model artifacts"
  }
];

export const Table = () => (
  <table style={{ fontFamily: 'Monospace' }}>
    <thead>
      <tr>
        <th>Policy</th>
        <th>Purpose</th>
      </tr>
    </thead>
    <tbody>
      {policies.map((policy) => (
        <tr key={policy.name}>
          <td style={{ fontWeight: 'bold' }}>{policy.name}</td>
          <td>{policy.purpose}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

Constellaxion integrates seamlessly with Google Cloud Platform (GCP) to deploy and fine-tune open-source models via **Vertex AI** and **Cloud Storage**.

This page explains what resources the CLI sets up behind the scenes and how to prepare your project.

---

## What Constellaxion Does on GCP

When you run a commands like `constellaxion init`, or `constellaxion model deploy`, Constellaxion performs a series of actions behind the scenes to enable the right GCP resources to handle the job. Some examples of what Constellaxion might do:

- Create or launch **Vertex AI** custom training jobs
- Upload datasets and model artifacts to **Cloud Storage**
- Deploy models to **Vertex AI Endpoints**
- Manage job metadata using service accounts

These actions require specific IAM permissions on your GCP project.

---

## ✅ Required Roles

Your Google Cloud user account must be assigned:

- `roles/resourcemanager.projectIamAdmin` – to create and manage service accounts

👉 [Granting IAM roles to a user](https://cloud.google.com/iam/docs/granting-changing-revoking-access#grant-single-role)

---

## ⚙️ Enabling Vertex AI

You must enable the **Vertex AI API** in your GCP project:

👉 [Enable the Vertex AI API](https://console.cloud.google.com/flows/enableapi?apiid=aiplatform.googleapis.com)

---

## 🛡️ Service Account Setup

After you run `constellaxion init`, Constellaxion creates a service account named:

`constellaxion-admin@{project_id}.iam.gserviceaccount.com`

This account is used to run training and deployment jobs on Vertex AI.

It will be granted the following roles:
<Table />

:::info[Security Note] 
This service account approach is not ideal for production deployments. We're working on a more secure solution. If you have any urgent needs, please reach out to us at [support@constellaxion.ai](mailto:support@constellaxion.ai).
:::
---

## 🌍 Region Support

Constellaxion supports all regions where Vertex AI is available. You configure this in your [model.yaml](../configure/model-yaml.md) file under the `deploy.gcp.location` field.

```yaml
deploy:
  gcp:
    project_id: my-project
    region: us-central1
```

[👉 Available Vertex AI regions](https://cloud.google.com/vertex-ai/docs/general/locations)

---


## 🧪 Next Steps

Once GCP is set up:
1. Create your model directory with a `model.yaml` file
2. Run `constellaxion init`
3. You’re ready to deploy, fine-tune, and prompt your models 🚀