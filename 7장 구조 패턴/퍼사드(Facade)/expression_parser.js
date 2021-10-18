export default class ExpressionParser {
  constructor() {
    this.operators = ["+", "-", "*", "/"];
    this.operatorToken = null;
    this.firstNumberToken = null;
    this.secondNumberToken = null;
  }

  getOperatorToken() {
    return this.operatorToken;
  }

  getFirstNumberToken() {
    return this.firstNumberToken;
  }

  getSecondNumberToken() {
    return this.secondNumberToken;
  }

  parse(expression) {
    let operatorIndex = -1;

    for (const operator of this.operators) {
      operatorIndex = expression.indexOf(operator);
      if (operatorIndex != -1) {
        this.operatorToken = operator;
      }
    }

    this.firstNumberToken = expression.substring(0, operatorIndex);
    this.secondNumberToken = expression.substring(operatorIndex + 1);
  }
}
