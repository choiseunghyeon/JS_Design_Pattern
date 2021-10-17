import AbstractExpression from "./abstract_expression";

export default class AbstractDecoratorExpression extends AbstractExpression {
  constructor(expression) {
    super();
    this.expression = expression;
  }

  setExpression(expression) {
    this.expression = expression;
  }
}
