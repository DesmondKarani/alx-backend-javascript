# ES6 Data Manipulation

## Project Overview

This project focuses on ES6 data manipulation using arrays and various data structures. It includes tasks involving `map`, `filter`, `reduce`, typed arrays, and more.

## Learning Objectives

- How to use `map`, `filter`, and `reduce` on arrays
- Understanding Typed Arrays
- Utilizing `Set`, `Map`, and `WeakMap` data structures

## Requirements

- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Code should use the `.js` extension
- Code will be tested using Jest and the command `npm run test`
- Code will be verified against lint using ESLint
- All functions must be exported

## Setup

### Install NodeJS 12.11.x

```sh
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v  # Should output v12.11.1
npm -v     # Should output 6.11.3
```

### Install Jest, Babel, and ESLint

1. Navigate to your project directory:
    ```sh
    mkdir es6_data_manipulation
    cd es6_data_manipulation
    ```

2. Create and add the `package.json` file:
    ```json
    {
      "name": "es6_data_manipulation",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "jest",
        "lint": "eslint .",
        "full-test": "npm run lint && npm run test"
      },
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "@babel/core": "^7.15.0",
        "@babel/preset-env": "^7.15.0",
        "babel-jest": "^27.0.6",
        "eslint": "^7.32.0",
        "jest": "^27.0.6"
      }
    }
    ```

3. Create and add the `babel.config.js` file:
    ```js
    module.exports = {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }]
      ]
    };
    ```

4. Create and add the `.eslintrc.js` file:
    ```js
    module.exports = {
      env: {
        browser: true,
        es2021: true,
        jest: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@babel/recommended'
      ],
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
      },
      rules: {
        'semi': ['error', 'always'],
        'quotes': ['error', 'single']
      },
    };
    ```

5. Run npm install to install dependencies:
    ```sh
    npm install
    ```

## Running Tests

To run the tests and lint checks, use the following commands:

```sh
npm run test
npm run lint
npm run full-test
```
