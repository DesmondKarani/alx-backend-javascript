// Task 3: Currency class
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  // Implement getter and setter for _name similarly

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
