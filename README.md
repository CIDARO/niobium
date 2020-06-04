<div align="center">
  <br/>
  <img src="./niobium.png" width="200" />
  <br/>
  <br/>
  <p>
    Niobium is an Open Source Truffle Box that comes with Redux and Tailwind CSS.
  </p>
  <p>
    version 1.0.0
  </p>
  <br/>
  <p>
    <a href="#status"><strong>Status</strong></a> ·
    <a href="#description"><strong>Description</strong></a> ·
    <a href="#usage"><strong>Usage</strong></a> ·
    <a href="#contributing"><strong>Contributing</strong></a>
  </p>
</div>

---

## Status

**Niobium** is currently in **alpha** stage.

---

## Description

**Niobium** is an Open Source Truffle Box that comes with Redux and Tailwind CSS and it is based on the <a href="https://github.com/alexroan/react-redux-bootstrap-box" target="_blank">React, Redux & Bootstrap Tuffle Box</a> created by <a href="https://github.com/alexroan" target="_blank">Alex Roan</a>: so kudos to him and all the contributors!

Niobium implements the following features:
- ReactJS
- React-Redux
- Tailwind CSS (configured with postcss)
- Dockerfile

This project is used **@CIDARO srl** as a boilerplate for our frontend applications.

---

## Usage

In order to use this Truffle Box make sure to be in a new and empty directory.

### Prerequisites

You'll need Truffle installed on your machine:

```bash
npm install -g truffle
```

### Github Repository

You can use this boilerplate project by simply cloning this repo:

```bash
git clone https://github.com/CIDARO/niobium.git
```

### Truffle

You can use this boilerplate also with Truffle that will install all the necessary dependencies:

```bash
# if you have truffle installed locally
npx truffle unbox CIDARO/niobium
# if you have truffle installed globally
truffle unbox CIDARO/niobiu,
```

### Post install commands

To compile and migrate the smart contracts just run the following commands:

```bash
compile
migrate
```

To run the ReactJS app, instead, simply run:

```bash
cd client # or make sure to be in the client folder
npm run start
```

This will start the ReactJS app on `http://localhost:3000` with everything already prepared.

To build the finished application for production purposes run:

```bash
cd client # or make sure to be in the client folder
npm run build
```

This will create a `build` folder inside the `client` one.

To build and run a Docker container run the following commands:

```bash
cd client # or make sure to be in the client folder
docker build -t niobium:latest .
docker run -it --rm -p 3000:3000 niobium:latest
```

Your project will be up and running on `http://localhost:3000`.

---

## Contributing

We welcome community contributions!

Please check out our <a href="https://github.com/CIDARO/niobium/issues">open issues</a> to get started.

If you discover something that could potentially impact security, please notify us immediately by sending an e-mail at <a href="mailto:support@cidaro.com">support@cidaro.com</a>. We'll get in touch with you as fast as we can!
