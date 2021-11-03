class AbstractOperation {
  constructor() {
    this.firstNumber = 0;
    this.secondNumber = 0;
  }

  getAnswer(firstNumber, secondNumber) {
    throw new Error("implement this method");
  }
  getOperator(firstNumber, secondNumber) {
    throw new Error("implement this method");
  }

  operate() {
    let firstNumber = this.getFirstNumber();
    let secondNumber = this.getSecondNumber();

    let operator = this.getOperator();

    let answer = this.getAnswer(firstNumber, secondNumber);

    let result = firstNumber + operator + secondNumber + "=" + answer;

    this.print(result);
  }

  print(result) {
    console.log(result);
  }

  setFirtNumber(arg) {
    this.firstNumber = arg;
  }
  setSecondNumber(arg) {
    this.secondNumber = arg;
  }
  getFirstNumber() {
    return this.firstNumber;
  }

  getSecondNumber() {
    return this.secondNumber;
  }
}

class AddOperation extends AbstractOperation {
  constructor() {
    super();
  }

  getAnswer(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  }

  getOperator() {
    return "+";
  }
}
class SubstractOperation extends AbstractOperation {
  constructor() {
    super();
  }

  getAnswer(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
  }

  getOperator() {
    return "-";
  }
}
class MultiplyOperation extends AbstractOperation {
  constructor() {
    super();
  }

  getAnswer(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
  }

  getOperator() {
    return "*";
  }
}

let firstNumber = 100;
let secondNumber = 20;

const operations = [new AddOperation(), new SubstractOperation(), new MultiplyOperation()];

operations.forEach(operation => {
  operation.setFirtNumber(firstNumber);
  operation.setSecondNumber(secondNumber);

  operation.operate();
});
