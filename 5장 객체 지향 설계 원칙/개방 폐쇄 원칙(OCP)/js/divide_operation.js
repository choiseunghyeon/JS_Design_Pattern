CALC.createNameSpace("CALC.ocp.before.DivideOperation");
CALC.ocp.before.DivideOperation = (function () {
  let AbstractOperation = CALC.ocp.before.AbstractOperation;
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
