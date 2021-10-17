import AbstractDecoratorExpression from "./abstract_decorator_expression";

export default class PowDecoratorExpression extends AbstractDecoratorExpression {
  constructor(expression, exponent) {
    super(expression);

    this.exponent = exponent;
  }

  operate() {
    return Math.pow(this.expression.operate(), this.exponent);
  }
}
