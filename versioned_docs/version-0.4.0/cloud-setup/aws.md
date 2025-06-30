---
sidebar_position: 1
---

# Working with AWS

export const policies = [
  {
    name: "AmazonSageMakerFullAccess",
    purpose: "To create, manage, and monitor training and endpoint jobs"
  },
  {
    name: "AmazonEC2ContainerRegistryFullAccess",
    purpose: "To push/pull Docker images for custom training and inference containers"
  },
  {
    name: "AmazonS3FullAccess",
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

Constellaxion supports deploying and fine-tuning open-source models on AWS using services like **SageMaker**, **ECR**, and **S3**.

This page explains what IAM resources the CLI sets up under the hood to enable this functionality, and what permissions are required to run it from your local machine.

---

## What Constellaxion Does on AWS

When you run a commands like `constellaxion init`, or `constellaxion model deploy`, Constellaxion performs a series of actions behind the scenes to enable the right AWS resources to handle the job. Some examples of what Constellaxion might do:

- Launch training jobs via **SageMaker**
- Push/pull custom containers using **ECR**
- Read/write datasets and model artifacts in **S3**
- Create and configure IAM roles automatically

These actions require specific IAM permissions in your AWS account.

---

## 🔐 IAM Role: `constellaxion-admin`

After you run `constellaxion init`, Constellaxion creates (or reuses) an IAM role named:
```
constellaxion-admin
```

This role is assumed by AWS services to carry out SageMaker training and ECS-based serving jobs.

### 🛠️ Role Trust Policy

The role allows the following AWS services to assume it:

- `sagemaker.amazonaws.com` – for training and inference
- `ecs-tasks.amazonaws.com` – for serving (future support)

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": [
          "sagemaker.amazonaws.com",
          "ecs-tasks.amazonaws.com"
        ]
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

### ✅ Attached Policies

The following AWS-managed policies are automatically attached to the `constellaxion-admin` role:
<Table />

:::info[Security Note] 
This IAM approach is not ideal for production deployments. We're working on a more secure solution. If you have any urgent needs, please reach out to us at [support@constellaxion.ai](mailto:support@constellaxion.ai).
:::

### 🧩 Inline Policy for ECR Runtime Access

In addition to the managed policies, Constellaxion attaches a custom inline policy to the `constellaxion-admin` role that explicitly grants ECR runtime access:
```json
{
  "Effect": "Allow",
  "Action": [
    "ecr:GetAuthorizationToken",
    "ecr:BatchCheckLayerAvailability",
    "ecr:GetDownloadUrlForLayer",
    "ecr:BatchGetImage"
  ],
  "Resource": "*"
}
```
This ensures SageMaker and ECS tasks can pull your custom containers during job execution.

### 👤 Your User Permissions

To initialize the AWS environment locally using Constellaxion, the identity running the CLI must be able to:
- Create IAM roles and attach policies
- Resolve the current identity using STS

You'll need to ensure that the identity has the following permissions:
```json
{
  "Effect": "Allow",
  "Action": [
    "iam:CreateRole",
    "iam:PutRolePolicy",
    "iam:AttachRolePolicy",
    "iam:GetRole",
    "sts:GetCallerIdentity"
  ],
  "Resource": "*"
}
```
You can either grant these permissions directly or run the CLI as a user with AdministratorAccess.

### 🌍 Region Support

Constellaxion supports any AWS region where SageMaker is available. Specify the region in your [model.yaml](../configure/model-yaml.md) file under the `deploy.aws.region` field.

```yaml
deploy:
  aws:
    region: us-east-1
```
[👉 SageMaker Region guide](https://docs.aws.amazon.com/general/latest/gr/sagemaker.html)


### 🛠️ Summary: What Happens When You Run init
	1.	The CLI calls `sts:GetCallerIdentity` to determine who you are
	2.	It creates the `constellaxion-admin` role (or skips if it already exists)
	3.	It attaches the required managed policies
	4.	It adds the inline ECR access policy
	5.	You’re ready to train or deploy!

### 🧪 Next Steps

Once AWS is set up:
	1.	Create a model directory with model.yaml
	2.	Run `constellaxion init`
	3.	You’re ready to deploy, fine-tune, and serve 🚀