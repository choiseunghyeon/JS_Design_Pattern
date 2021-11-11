import AbstractOperationHandler from "./abstract_operation_handler";

export default class DivideOperationHandler extends AbstractOperationHandler {
  constructor(operand) {
    super(operand);
  }

  operate(request) {
    let firstNumber = request.getResult();
    let secondNumber = this.getOperandValue();

    return firstNumber / secondNumber;
  }

  getOperator() {
    return "/";
  }

  operateNumber(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
  }
}
