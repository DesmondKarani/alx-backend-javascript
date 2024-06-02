// Task 5: Building class
export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') throw TypeError('sqft must be a number');
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  // This method should be overridden by subclasses
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
