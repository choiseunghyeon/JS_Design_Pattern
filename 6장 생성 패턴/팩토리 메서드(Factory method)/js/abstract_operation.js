export default class AbstractOperation {
  constructor() {
    this.firstNumber = 0;
    this.secondNumber = 0;
  }

  operate() {
    let firstNumber = this.getFirstNumber();
    let secondNumber = this.secondNumber();

    let operator = this.getOperator();

    let operatorDescription = operator.getDescription();

    let answer = operator.getAnswer(firstNumber, secondNumber);

    let result = firstNumber + operatorDescription + secondNumber + " = " + answer;

    this.print(result);
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

  toString() {
    return "AbstractOperation";
  }
}
