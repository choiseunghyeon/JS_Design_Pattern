import AbstractOperationTarget from "./abstract_operation_target";

export default class MultiplyOperation extends AbstractOperationTarget {
  constructor() {
    super();
  }

  operate(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
  }
}
