CALC.createNameSpace("CALC.lsp.before.Calculator");

CALC.lsp.before.Calculator = (function () {
  class Calculator {
    constructor() {
      this.addOperation = null;
      this.subtractOperation = null;
      this.multiplyOperation = null;
    }

    calculate(operation, firstNumber, secondNumber) {
      if (operation.isInvalidNumber(firstNumber, secondNumber)) return -999;

      let answer = operation.operate(firstNumber, secondNumber);
      return answer;
    }

    toString() {
      return "Calculator";
    }
  }

  return Calculator;
})();
