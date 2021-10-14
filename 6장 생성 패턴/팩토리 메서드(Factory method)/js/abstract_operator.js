export default class AbstractOperator {
  constructor() {}

  getAnswer(firstNumber, secondNumber) {
    throw new Error("implement this method");
  }

  getDescription() {
    throw new Error("implement this method");
  }

  toString() {
    return "AbstractOperator";
  }
}
