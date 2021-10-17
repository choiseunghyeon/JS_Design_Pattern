export default class Calculator {
  constructor() {
    this.expression = null;
  }

  calculate() {
    return this.expression.operate();
  }

  setExpression(expression) {
    this.expression = expression;
  }
}
