import AbstractExpression from "./abstract_expression";

export default class AbstractOperationExpression extends AbstractExpression {
  constructor() {
    super();
    this.operandList = [];
  }

  addOperandExpression(operandExpression) {
    this.operandList.push(operandExpression);
  }
}
