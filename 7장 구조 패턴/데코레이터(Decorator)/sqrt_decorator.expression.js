import AbstractDecoratorExpression from "./abstract_decorator_expression";

export default class SqrtDecoratorExpression extends AbstractDecoratorExpression {
  constructor(expression) {
    super(expression);
  }

  operate() {
    return Math.sqrt(this.expression.operate());
  }
}
