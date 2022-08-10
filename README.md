Author: Saikat Ghosh
Date: 18-07-2022

# The IKEA Warehouse BE Server

## prerequisite

You must have installed the below dependencies:

```Shell

git,
node.js

```

## Start the application

Clone or download this project. Then in the root run the below command to install the node_modules dependencies reuired for this project to run properly.

```Shell

yarn install

```

or

```Shell

npm install

```

Set the environment variables:

```Shell

cp .env.example .env

# Open .env and modify the environment variables (if needed)

```

# Commands

Running locally:

```Shell

yarn dev

```

or

```Shell

npm run-script dev

```

Running in production:

```Shell

yarn start

```

or

```Shell

npm start

```


# Docker:

```Shell

# run docker container in development mode
yarn docker:dev

or

npm run-script docker:dev

# run docker container in production mode
yarn docker:prod

or

npm run-script docker:prod

```

This will build the application and run the unit tests. After a succesful build you will find the warehouse.jar in the ./target folder.

## Linting

```Shell

# run ESLint
yarn lint

or 

npm run-script lint

# fix ESLint errors
yarn lint:fix

or 

npm run-script lint:fix

# run prettier
yarn prettier

or 

npm run-script prettier

```

# Environment Variables

The environment variables can be found and modified in the .env file. They come with these default values:

```Shell

# Port number
PORT=3000

```

# Project Structure

```Shell

src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--docs\           # Inventory and Products input files
 |--middlewares\    # Custom express middlewares
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and constant
 |--validations\    # Request data validation schemas
 |--app.js          # Express app
 |--index.js        # App entry point

```

# API Documentation

The API routes are classified into two groups, one is inventory and another one is products. Products routes has three endpoints and inventory routes has one endpoint only.

## API Endpoints

To use the endpoints a header "Content-Type: application/json" need to be configured. The endpoints will operate in http protocol, hence the prefix would be "https://localhost:3000/...". The later part of the endpoint is mentioned below according to their respective operations and methods.

### Inventory Route

```Shell

GET /warehouse/inventory - To fetch the inventory details

```

### Product Route

```Shell

GET /warehouse/product - To fetch the product details
POST /warehouse/product - To add a product in the products list
DELETE /warehouse/product - To remove a product from the products list

```

# Logging

Import the logger from src/config/logger.js. It is using the Winston logging library.

Logging should be done according to the following severity levels (ascending order from most important to least important):

```Shell

const logger = require('<path to src>/config/logger');

logger.error('message'); // level 0
logger.warn('message'); // level 1
logger.info('message'); // level 2
logger.http('message'); // level 3
logger.verbose('message'); // level 4
logger.debug('message'); // level 5

```

In development mode, log messages of all severity levels will be printed to the console.

In production mode, only info, warn, and error logs will be printed to the console.
It is up to the server (or process manager) to actually read them from the console and store them in log files.
This app uses pm2 in production mode, which is already configured to store the logs in log files.

Note: API request information (request url, response code, timestamp, etc.) are also automatically logged (using morgan).