CALC.createNameSpace("CALC.dip.before.DivideOperation");
CALC.dip.before.DivideOperation = (function () {
  let AbstractOperation = CALC.isp.before.AbstractOperation;
  class DivideOperation extends AbstractOperation {
    constructor() {
      super();
    }
    operate(firstNumber, secondNumber) {
      return firstNumber / secondNumber;
    }

    toString() {
      return "DivideOperation";
    }
  }

  return DivideOperation;
})();
