# 0x02. ES6 Classes

## Project Overview

**Weight:** 1  
**Duration:** May 30, 2024 6:00 AM to May 31, 2024 6:00 AM

This project focuses on object-oriented programming (OOP) using JavaScript ES6 classes. The goal is to understand and implement various features of ES6 classes, including class definition, methods, static methods, class inheritance, and metaprogramming.

### Auto Review
- **Auto QA review:** 0.0/33 mandatory & 0.0/3 optional
- **Altogether:** 0.0%
- **Mandatory:** 0.0%
- **Optional:** 0.0%
- **Calculation:** 0.0% + (0.0% * 0.0%) == 0.0%

## Resources

- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Metaprogramming](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming)

## Learning Objectives

By the end of this project, you should be able to explain the following concepts:

- How to define a class
- How to add methods to a class
- Why and how to add a static method to a class
- How to extend a class from another
- Metaprogramming and symbols

## Requirements

- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files should end with a new line
- A `README.md` file at the root of the project is mandatory
- Your code should use the `.js` extension
- Your code will be tested using Jest with the command `npm run test`
- Your code will be verified against lint using ESLint
- Your code needs to pass all tests and lint. You can verify the entire project by running `npm run full-test`

## Setup

### Install NodeJS 12.11.x

Run the following commands in your home directory:

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v
# Expected output: v12.11.1
npm -v
# Expected output: 6.11.3
```

### Install Jest, Babel, and ESLint

In your project directory, install Jest, Babel, and ESLint using the supplied `package.json` and run `npm install`.

## Configuration Files

Ensure the following configuration files are added to your project directory:

- `package.json`
- `babel.config.js`
- `.eslintrc.js`

Remember to run `npm install` after adding `package.json`.
