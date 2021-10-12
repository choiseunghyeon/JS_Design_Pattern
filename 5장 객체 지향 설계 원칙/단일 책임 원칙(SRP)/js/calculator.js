CALC.createNameSpace("CALC.sip.after.Calculator");

CALC.sip.after.Calculator = (function () {
  class Calculator {
    constructor() {
      this.addOperation = null;
      this.subtractOperation = null;
      this.multiplyOperation = null;
      this.divideOperation = null;
    }

    calculate(operator, firstNumber, secondNumber) {
      let answer = 0;
      if (operator === "+") answer = this.addOperation.add(firstNumber, secondNumber);
      else if (operator === "-") answer = this.subtractOperation.subtract(firstNumber, secondNumber);
      else if (operator === "*") answer = this.multiplyOperation.multiply(firstNumber, secondNumber);
      else if (operator === "/") answer = this.divideOperation.divide(firstNumber, secondNumber);

      return answer;
    }

    toString() {
      return "Calculator";
    }

    setAddOperation(addOperation) {
      this.addOperation = addOperation;
    }

    setSubstractOperation(subtractOperation) {
      this.subtractOperation = subtractOperation;
    }

    setMultiplyOperation(multiplyOperation) {
      this.multiplyOperation = multiplyOperation;
    }

    setDivideOperation(divideOperation) {
      this.divideOperation = divideOperation;
    }
  }

  return Calculator;
})();
