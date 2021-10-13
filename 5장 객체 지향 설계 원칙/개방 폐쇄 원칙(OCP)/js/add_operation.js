CALC.createNameSpace("CALC.ocp.before.AddOperation");
CALC.ocp.before.AddOperation = (function () {
  let AbstractOperation = CALC.ocp.before.AbstractOperation;
  class AddOperation extends AbstractOperation {
    constructor() {
      super();
    }

    operate(firstNumber, secondNumber) {
      return firstNumber + secondNumber;
    }

    toString() {
      return "AddOperation";
    }
  }

  return AddOperation;
})();
