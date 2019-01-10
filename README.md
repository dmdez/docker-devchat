---
theme: "league"
transition: "zoom"
highlightTheme: "darkula"
---

## What I learned from using

### `docker-compose`

---

# What is Docker?

> Docker is a computer program that performs operating-system-level virtualization, also known as "containerization".[6] It was first released in 2013 and is developed by Docker, Inc.[7]

---

[![What is docker](https://img.youtube.com/vi/pGYAg7TMmp0/0.jpg)](https://www.youtube.com/tv#/watch?v=pGYAg7TMmp0)

---

## What is Docker?

![DOCKER](https://lh6.googleusercontent.com/OLNkuRtYmA-8DwJ1-gSM9HL4Uxu56ae3yX5deu9997DXNtNEFbaAnuwSTlKFbAlmwH8GqJohKNow8gpDbUj_LPqW1sfXBu7CLDFB2cL5jqCuuLiOc89AKdH2yiYkq-37EdnePetq "DOCKER")

---

# Why use Docker?

- Public container registries (DockerHub)
  - Spin up any type of environment fast
- Project environment consistency and maintainability (Mac/Win)
- Deployable?

---

## Install Docker

### No:

```
brew install docker-machine
brew install docker-compose
```

### Yes:

https://hub.docker.com/editions/community/docker-ce-desktop-mac

---

## Dockerfile

A `Dockerfile` is a text document that contains all the commands a user could call on the command line to assemble an image. Using `docker build` users can create an automated build that executes several command-line instructions in succession.

---

## Dockerfile

```
FROM node:9.8

# Create app directory
WORKDIR /app

# Install node dependencies
COPY package.json /app
RUN npm install

COPY . /app

CMD node index.js
EXPOSE 8081
```

---

... but that's just on single environment

which brings us to: `docker-compose`

---

## Want to bash into a container? No problem!

`docker-compose run app /bin/bash`

---

## How do you run tests?

`docker-compose run app npm test`
