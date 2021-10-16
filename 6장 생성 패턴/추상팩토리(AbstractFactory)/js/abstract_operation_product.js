export default class AbstractOperationProduct {
  constructor() {
    this.firstNumberOperandProduct = null;
    this.secondNumberOperandProduct = null;
  }

  print() {
    throw new Error("implement this method");
  }

  setFirstnumberOperandProduct(firstNumberOperandProduct) {
    this.firstNumberOperandProduct = firstNumberOperandProduct;
  }

  setSecondNumberOperandProduct(secondNumberOperandProduct) {
    this.secondNumberOperandProduct = secondNumberOperandProduct;
  }

  getFirstNumber() {
    return this.firstNumberOperandProduct.getNumber();
  }

  getSecondNumber() {
    return this.secondNumberOperandProduct.getNumber();
  }

  add() {
    return this.getFirstNumber() + this.getSecondNumber();
  }

  divide() {
    return this.getFirstNumber() / this.getSecondNumber();
  }
  substract() {
    return this.getFirstNumber() - this.getSecondNumber();
  }
  multiply() {
    return this.getFirstNumber() * this.getSecondNumber();
  }
}
