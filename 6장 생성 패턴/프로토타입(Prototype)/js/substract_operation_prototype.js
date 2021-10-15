import AbstractOperationPrototype from "./abstract_operation_prototype";

export default class SubstractperationPrototype extends AbstractOperationPrototype {
  constructor(operation) {
    super(operation);
  }

  getClone() {
    return new SubstractperationPrototype(this);
  }

  getAnswer(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
  }

  getOperator() {
    return "-";
  }
}
