# CI/CD Automated Deployment Pipeline Using Jenkins & Docker

## Project Overview

This project demonstrates a complete CI/CD (Continuous Integration and Continuous Deployment) workflow using GitHub, Jenkins, Docker, and Node.js.

The application is automatically built and deployed whenever code is pushed to GitHub.

---

# Project Architecture

```text
VS Code
   ↓
Git Push
   ↓
GitHub Repository
   ↓
Jenkins Pipeline
   ↓
Docker Build
   ↓
Container Deployment
   ↓
Live Application
```

---

# Project Explanation

This project automates the software deployment process using Jenkins and Docker.

Whenever code is pushed to GitHub:
1. Jenkins automatically pulls latest code
2. Docker image is built automatically
3. Old container is stopped
4. New updated container is deployed
5. Application becomes live automatically

This demonstrates a real-world CI/CD workflow used in Platform Engineering and DevOps.

---

# Technologies Used

- Git
- GitHub
- Jenkins
- Docker
- Node.js
- Express.js
- VS Code

---

# Project Folder Structure

```bash
cicd/
│
├── app.js
├── Dockerfile
├── Jenkinsfile
├── package.json
├── package-lock.json
├── .dockerignore
└── README.md
```

---

# How Each File Works

## app.js

Main Node.js application file that creates Express server and runs application on port 3000.

---

## package.json

Manages project dependencies and application scripts.

---

## Dockerfile

Creates Docker image for the application.

---

## Jenkinsfile

Defines CI/CD pipeline stages:
- Clone Repository
- Build Docker Image
- Stop Old Container
- Run New Container

---

## .dockerignore

Ignores unnecessary files during Docker build.

---

# How To Run The Project

## Clone Repository

```bash
git clone https://github.com/SaiDeekshu/cicd.git
```

---

## Move Into Project Folder

```bash
cd cicd
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Application

```bash
node app.js
```

---

## Open Browser

```text
http://localhost:3000
```

---

# Docker Commands Used

## Build Docker Image

```bash
docker build -t cicd .
```

Builds Docker image for the application.

---

## Run Docker Container

```bash
docker run -d -p 3000:3000 --name cicd-container cicd
```

Runs Docker container from Docker image.

---

## Check Running Containers

```bash
docker ps
```

Displays running Docker containers.

---

# Jenkins Pipeline Workflow

1. Checkout SCM
2. Clone GitHub Repository
3. Build Docker Image
4. Stop Old Docker Container
5. Run New Docker Container

---


