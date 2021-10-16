import IBaseOperationImplementor from "./ibase_operation_implementor";

export default class BaseOperation extends IBaseOperationImplementor {
  constructor() {
    super();
  }

  add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  }
  substract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
  }
  multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
  }
  divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
  }
}
