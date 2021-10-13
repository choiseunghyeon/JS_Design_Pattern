CALC.createNameSpace("CALC.ocp.before.SubtractOperation");
CALC.ocp.before.SubtractOperation = (function () {
  let AbstractOperation = CALC.ocp.before.AbstractOperation;
  class SubtractOperation extends AbstractOperation {
    constructor() {
      super();
    }
    operate(firstNumber, secondNumber) {
      return firstNumber - secondNumber;
    }

    toString() {
      return "SubtractOperation";
    }
  }

  return SubtractOperation;
})();
