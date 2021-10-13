CALC.createNameSpace("CALC.isp.before.SubtractOperation");
CALC.isp.before.SubtractOperation = (function () {
  let AbstractOperation = CALC.isp.before.AbstractOperation;
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
