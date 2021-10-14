import AbstractOperator from "./abstract_operator";

export default class AddOperator extends AbstractOperator {
  constructor() {
    super();
  }

  getAnswer(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  }
  getDescription() {
    return "+";
  }
}
