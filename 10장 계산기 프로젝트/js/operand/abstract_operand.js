export default class AbstractOperand {
  constructor(operand) {}

  getValue() {
    throw new Error("implement this method");
  }
  getDesc() {
    throw new Error("implement this method");
  }

  isNumber() {
    return false;
  }
}
