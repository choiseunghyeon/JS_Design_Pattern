export default class NumberOperand {
  constructor(value) {
    this.value = value;
  }

  getNumber() {
    return parseInt(this.value, 10);
  }
}
