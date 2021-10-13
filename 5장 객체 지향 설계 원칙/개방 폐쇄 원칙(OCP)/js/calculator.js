CALC.createNameSpace("CALC.ocp.before.Calculator");

CALC.ocp.before.Calculator = (function () {
  class Calculator {
    constructor() {
      this.addOperation = null;
      this.subtractOperation = null;
      this.multiplyOperation = null;
    }

    calculate(firstNumber, secondNumber) {
      let answer = this.operation.operate(firstNumber, secondNumber);
      return answer;
    }

    toString() {
      return "Calculator";
    }

    setOperation(operation) {
      this.operation = operation;
    }
  }

  return Calculator;
})();
