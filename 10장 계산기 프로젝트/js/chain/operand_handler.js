import AbstractHandler from "./abstract_handler";

export default class OperandHandler extends AbstractHandler {
  constructor(operand) {
    super(operand);
  }

  operate(request) {
    let value = this.getOperandValue();
    return value;
  }

  getEquation(request) {
    return this.getOperandDesc();
  }
}
