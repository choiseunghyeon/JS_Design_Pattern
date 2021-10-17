export default class AbstractExpression {
  constructor() {}

  operate() {
    throw new Error("implement this method");
  }
}
