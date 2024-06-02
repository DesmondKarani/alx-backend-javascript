module.exports = {
  env: {
    browser: true,
    es2020: true,  // Update to es2020 if you prefer, otherwise use es2019
    jest: true
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 2019,  // Set to a compatible ECMA version, such as 2019
    sourceType: 'module'
  },
  rules: {
    // Customize your rules here
  }
};
