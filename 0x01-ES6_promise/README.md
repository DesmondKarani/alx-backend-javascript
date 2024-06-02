# 0x01. ES6 Promises

## JavaScript - ES6

### Project Overview
This project focuses on understanding and utilizing ES6 Promises in JavaScript. It took place from May 28, 2024, 6:00 AM to May 30, 2024, 6:00 AM. An auto-review will be launched at the deadline.

### Project Details
- **Weight:** 1
- **Auto QA review:** 0.0/26 mandatory & 0.0/4 optional
- **Altogether:** 0.0%

### Resources
Read or watch:
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://developers.google.com/web/fundamentals/primers/promises)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

### Learning Objectives
By the end of this project, you should be able to explain:
- What Promises are, why they are used, and how they work.
- How to use the `then`, `resolve`, and `catch` methods.
- How to use every method of the `Promise` object.
- How to use `throw` and `try`.
- How to use the `await` operator.
- How to use an `async` function.

### Requirements
- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- Allowed editors: vi, vim, emacs, Visual Studio Code.
- All files should end with a new line.
- A `README.md` file at the root of the project folder is mandatory.
- Code should use the `.js` extension.
- Code will be tested using Jest and the command `npm run test`.
- Code will be verified against lint using ESLint.
- All functions must be exported.

### Setup
1. **Install NodeJS 12.11.x**
   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   nodejs -v  # Should print v12.11.1
   npm -v     # Should print 6.11.3
   ```

2. **Install Jest, Babel, and ESLint**
   In your project directory, install Jest, Babel, and ESLint using the supplied `package.json` and run:
   ```bash
   npm install
   ```

### Configuration Files
Add the following files to your project directory:

- `package.json`
- `babel.config.js`
- `utils.js`
- `.eslintrc.js`

Don't forget to run `npm install` when you have the `package.json` file.

### Response Data Format
- `uploadPhoto` returns a response with the format:
  ```json
  {
    "status": 200,
    "body": "photo-profile-1"
  }
  ```
- `createUser` returns a response with the format:
  ```json
  {
    "firstName": "Guillaume",
    "lastName": "Salva"
  }
  ```

### License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Acknowledgments
Thanks to the creators of the resources provided for making this project possible.
