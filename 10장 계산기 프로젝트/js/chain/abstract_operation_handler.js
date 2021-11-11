import AbstractHandler from "./abstract_handler";

export default class AbstractOperationHandler extends AbstractHandler {
  constructor(operand) {
    super(operand);
  }

  getOperator() {
    throw new Error("implement this method");
  }

  getEquation(request) {
    return ` ${this.getOperator()} ${this.getOperandDesc()}`;
  }

  isOperation() {
    return true;
  }

  operateNumber(firstNumber, secondNumber) {
    throw new Error("implement this method");
  }
}
