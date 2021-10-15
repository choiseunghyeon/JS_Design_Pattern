export default class Client {
  constructor() {
    this.operationPrototype = null;
    this.operationPrototypeMap = {};

    this.initOperationMap();
  }

  operate() {
    this.operationPrototype.operate();
  }

  setOperation(operator, firstNumber, secondNumber) {
    this.operationPrototype = this.getOperationClone(operator);

    this.operationPrototype.setFirstNumber(firstNumber);
    this.operationPrototype.setSecondNumber(secondNumber);
  }

  initOperationMap() {
    this.operationPrototypeMap["+"] = new AddOperationPrototype();
    this.operationPrototypeMap["-"] = new SubstractOperationPrototype();
  }

  getOperationClone(operator) {
    let operation = this.getOperationClone[operator];
    return operation.getClone();
  }
}
