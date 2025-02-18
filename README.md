# Store Frontend

This repository contains the frontend code for the Store application. The application is built using Next.js and React, and it includes various components and pages to manage products, categories, orders, and settings.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Pages](#pages)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/store-frontend.git
cd store-frontend
npm install --legacy-peer-deps
```
### [IMPORTANT!] .env file setup
Use the `.env copy` file in your project. You need to rename it to `.env` and ensure that the environment variables are correctly set. 

### [IMPORTANT!] obtaining GOOGLE_ID and GOOGLE_SECRET
1. Go to the [Google API Console](https://console.cloud.google.com/apis/credentials) and create a new project.
2. Enable the Google API for OAuth 2.0, create a new client and set the client ID and client secret in the `.env` file.
3. Put ``http://localhost:3000/api/auth/google/callback`` or ``PRODUCTION_DOMAIN/api/auth/google/callback`` as the callback URL in the Authorized redirect URIs section of the client.

## Usage

To run the development server, use the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Production Build
To build the project for production, use:

```bash
npm run build
```

To start the production server, use:

```bash
npm start
```

## Project Structure

The project structure is as follows:

```
store-frontend/
├── components/
│   ├── Nav.js
│   ├── Header.js
│   └── Footer.js
├── pages/
│   ├── index.js
│   ├── products/
│   │   ├── index.js
│   │   ├── new.js
│   │   └── edit/[id].js
│   ├── categories.js
│   ├── orders.js
│   └── settings.js
├── public/
│   ├── images/
│   └── styles/
├── styles/
│   ├── globals.css
│   └── Home.module.css
├── .next/
├── .history/
├── package.json
├── package-lock.json
└── README.md
```

## Components

### Nav.js

The `Nav` component is responsible for rendering the navigation bar. It includes links to various pages such as orders and settings.

## Pages

### index.js

The main landing page of the application.

### products.js

- `index.js`: Displays a list of products.

### products/

- `new.js`: Form to add a new product.
- `edit/[id].js`: Form to edit an existing product.

### categories.js

Displays a list of categories.

### orders.js

Displays a list of orders.

### settings.js

Displays the settings page.