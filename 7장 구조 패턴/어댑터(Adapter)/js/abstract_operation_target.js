export default class AbstractOperationTarget {
  constructor() {}

  operate(firstNumber, secondNumber) {
    throw new Error("implement this method");
  }
}
