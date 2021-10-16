import AbstractExpression from "./abstract_expression";

export default class NumberExpression extends AbstractExpression {
  constructor(value) {
    super();
    this.value = value;
  }

  operate() {
    return this.value;
  }
}
