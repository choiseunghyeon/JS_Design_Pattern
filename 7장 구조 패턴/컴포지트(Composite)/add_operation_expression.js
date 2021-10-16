import AbstractOperationExpression from "./abstract_operation_expression";

export default class AddOperationExpression extends AbstractOperationExpression {
  constructor() {
    super();
  }

  operate() {
    let firstOperandExpression = this.operandList[0];
    let secondoperandExpression = this.operandList[1];

    let firstReulst = firstOperandExpression.operate();
    let secondResult = secondoperandExpression.operate();

    return firstReulst + secondResult;
  }
}
