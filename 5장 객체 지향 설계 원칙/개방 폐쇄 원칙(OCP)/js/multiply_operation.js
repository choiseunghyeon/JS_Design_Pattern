CALC.createNameSpace("CALC.ocp.before.MultiplyOperation");
CALC.ocp.before.MultiplyOperation = (function () {
  let AbstractOperation = CALC.ocp.before.AbstractOperation;
  class MultiplyOperation extends AbstractOperation {
    constructor() {
      super();
    }
    operate(firstNumber, secondNumber) {
      return firstNumber * secondNumber;
    }

    toString() {
      return "MultiplyOperation";
    }
  }

  return MultiplyOperation;
})();
