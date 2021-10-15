import AbstractOperationPrototype from "./abstract_operation_prototype";

export default class AddOperationPrototype extends AbstractOperationPrototype {
  constructor(operation) {
    super(operation);
  }

  getClone() {
    return new AddOperationPrototype(this);
  }

  getAnswer(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  }

  getOperator() {
    return "+";
  }
}
