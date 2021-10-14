CALC.createNameSpace("CALC.builder.AbstractOperationBuilder");

CALC.builder.AbstractOperationBuilder = (function () {
  class AbstractOperationBuilder {
    constructor(firstNumber, secondNumber) {
      this.firstNumber = firstNumber;
      this.secondNumber = secondNumber;

      this.result = "";
    }

    operate() {
      throw new Error("implement this method");
    }

    toString() {
      return "AbstractOperationBuilder " + this.firstNumber + "" + this.secondNumber;
    }

    getResult() {
      return this.result;
    }

    buildFirstNumber() {
      this.result += this.firstNumber;
    }

    buildSecondNumber() {
      this.result += this.secondNumber;
    }

    buildeAnswer() {
      let answer = this.operate();

      this.result += " = " + answer;
    }

    buildOperate() {
      throw new Error("implement this method");
    }
  }

  return AbstractOperationBuilder;
})();
