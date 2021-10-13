CALC.createNameSpace("CALC.dip.before.SubtractOperation");
CALC.dip.before.SubtractOperation = (function () {
  let AbstractOperation = CALC.dip.before.AbstractOperation;
  class SubtractOperation extends AbstractOperation {
    constructor() {
      super();
    }
    operate(firstNumber, secondNumber) {
      return firstNumber - secondNumber;
    }

    getOperator() {
      return "-";
    }
    toString() {
      return "SubtractOperation";
    }
  }

  return SubtractOperation;
})();
