export class Normalizer {

  constructor(value) {
    this._value = value;
  }

  static of(value) {
    return new Normalizer(value);
  }

  get() {
    return this._value;
  }

  isNothing() {
    return this._value === null || this._value === undefined;
  }

  map(fn) {
    if (this.isNothing()) return Normalizer.of(null);
    return Normalizer.of(fn(this._value));
  }
}