CALC.createNameSpace("CALC.dip.before.MultiplyOperation");
CALC.dip.before.MultiplyOperation = (function () {
  let AbstractOperation = CALC.dip.before.AbstractOperation;
  class MultiplyOperation extends AbstractOperation {
    constructor() {
      super();
    }
    operate(firstNumber, secondNumber) {
      return firstNumber * secondNumber;
    }

    getOperator() {
      return "*";
    }

    toString() {
      return "MultiplyOperation";
    }
  }

  return MultiplyOperation;
})();
