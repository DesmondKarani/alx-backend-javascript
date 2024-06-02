// Task 5: Building class
export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = sqft;
    if (new.target === Building) {
      throw new Error('Cannot instantiate abstract class');
    }
  }

  get sqft() {
    return this._sqft;
  }

  // Enforce implementing evacuationWarningMessage in subclasses
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
