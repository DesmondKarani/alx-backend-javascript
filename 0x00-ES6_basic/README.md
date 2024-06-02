# ES6 Basics

## Description

This project explores the fundamental features introduced in ECMAScript 6 (ES6), also known as ECMAScript 2015. It covers new syntax and capabilities that make JavaScript programming more efficient and readable.

## Learning Objectives

By the end of this project, you should be able to explain and use the following ES6 features:

- Constants and Variables (`const` and `let`)
- Arrow Functions
- Default Parameters
- Rest and Spread Parameters
- String Templating
- Enhanced Object Literals
- Iterators and `for-of` Loops

## Setup

### Prerequisites

- NodeJS 12.11.x
- npm 6.11.3

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/es6-basics.git
   cd es6-basics
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

## Usage

### Running Tests

Execute the test suite using Jest:

```sh
npm test
```

### Linting Code

Ensure code quality and adherence to style guidelines with ESLint:

```sh
npx eslint .
```

## Key Features and Examples

- **Constants and Variables:**

  ```js
  const PI = 3.14;
  let radius = 5;
  ```

- **Arrow Functions:**

  ```js
  const sum = (a, b) => a + b;
  ```

- **Default Parameters:**

  ```js
  const greet = (name = 'Guest') => `Hello, ${name}!`;
  ```

- **Rest and Spread Parameters:**

  ```js
  const add = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);
  ```

- **String Templating:**

  ```js
  const message = `The sum of 5 and 3 is ${sum(5, 3)}`;
  ```

- **Enhanced Object Literals:**

  ```js
  const person = {
    name: 'John',
    age: 30,
    greet() {
      return `Hi, I'm ${this.name}`;
    },
  };
  ```

- **Iterators and `for-of` Loops:**

  ```js
  const arr = [1, 2, 3];
  for (const num of arr) {
    console.log(num);
  }
  ```

## License

This project is licensed under the MIT License.
