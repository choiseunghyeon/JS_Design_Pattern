CALC.createNameSpace("CALC.dip.before.AddOperation");
CALC.dip.before.AddOperation = (function () {
  let AbstractOperation = CALC.isp.before.AbstractOperation;
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
