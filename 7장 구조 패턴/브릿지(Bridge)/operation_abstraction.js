export default class OperationAbstraction {
  constructor(impl) {
    this.impl = impl;
  }

  add(firstNumber, secondNumber) {
    return this.impl.add(firstNumber, secondNumber);
  }
  substract(firstNumber, secondNumber) {
    return this.impl.substract(firstNumber, secondNumber);
  }
  multiply(firstNumber, secondNumber) {
    return this.impl.multiply(firstNumber, secondNumber);
  }
  divide(firstNumber, secondNumber) {
    return this.impl.divide(firstNumber, secondNumber);
  }
}
