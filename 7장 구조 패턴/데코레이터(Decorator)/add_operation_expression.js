import AbstractOperationExpression from "./abstract_operation_expression";

export default class AddOperationExpression extends AbstractOperationExpression {
  constructor() {
    super();
  }

  operate() {
    let firstOperandExpression = this.operandList[0];
    let secondOperandExpression = this.operandList[1];

    let firstResult = firstOperandExpression.operate();
    let secondResult = secondOperandExpression.operate();

    return firstResult + secondResult;
  }
}
