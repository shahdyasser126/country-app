# Country App - Containerized Web Application Deployment

## Project Description

Country App is a simple web application that displays country-related information.

The application was containerized using Docker and deployed on Kubernetes running on an AWS EC2 instance using Minikube.

The project demonstrates a DevOps deployment workflow using:

- Terraform for Infrastructure as Code
- AWS EC2 for cloud infrastructure
- Docker for application containerization
- Kubernetes for application orchestration
- GitHub Actions for CI automation


## Architecture Overview

The deployment architecture consists of:

Developer

↓

GitHub Repository

↓

GitHub Actions

↓

Docker Image

↓

AWS EC2 Instance

↓

Minikube Kubernetes Cluster

↓

Kubernetes Deployment

↓

Kubernetes Service

↓

Web Application


## Technologies Used

- AWS EC2
- Terraform
- Docker
- Kubernetes
- Minikube
- kubectl
- GitHub Actions


## Kubernetes Deployment

Kubernetes manifests are stored inside the kubernetes directory:

- namespace.yaml
- deployment.yaml
- service.yaml
- configmap.yaml
- secret.yaml


## CI/CD

GitHub Actions workflow is triggered on every push to the main branch.

The workflow performs:

1. Checkout repository
2. Build Docker image


## Cleanup

To destroy AWS resources:

```bash
cd terraform
terraform destroy
