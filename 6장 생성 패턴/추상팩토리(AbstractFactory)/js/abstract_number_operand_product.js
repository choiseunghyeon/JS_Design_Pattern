export default class AbstractNumberOperandProduct {
  constructor(value) {
    this.value = value;
  }

  getNumber() {
    throw new Error("implement this method");
  }

  getValue() {
    return this.value;
  }
}
