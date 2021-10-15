export default class AbstractOperationPrototype {
  constructor(operation) {
    this.firstNumber = 0;
    this.secondNumber = 0;

    if (operation != null) {
      this.firstNumber = operation.firstNumber;
      this.secondNumber = operation.secondNumber;
    }
  }

  getClone() {
    throw new Error("implement this method");
  }

  getAnswer(firstNumber, secondNumber) {
    throw new Error("implement this method");
  }

  getOperator() {
    throw new Error("implement this method");
  }

  getFirstNumber() {
    return this.firstNumber;
  }

  setFirstNumber(firstNumber) {
    this.firstNumber = firstNumber;
  }

  getSecondNumber() {
    return this.secondNumber;
  }

  setSecondNumber(secondNumber) {
    this.secondNumber = secondNumber;
  }

  print(result) {
    console.log(result);
  }

  operate() {
    let firstNumber = this.getFirstNumber();
    let secondNumber = this.getSecondNumber();
    let result = firstNumber + this.getOperator() + secondNumber + " = " + this.getAnswer(firstNumber, secondNumber);

    this.print(result);
  }
}
