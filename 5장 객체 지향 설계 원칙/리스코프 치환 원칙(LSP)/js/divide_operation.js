CALC.createNameSpace("CALC.lsp.before.DivideOperation");
CALC.lsp.before.DivideOperation = (function () {
  let AbstractOperation = CALC.lsp.before.AbstractOperation;
  class DivideOperation extends AbstractOperation {
    constructor() {
      super();
    }
    operate(firstNumber, secondNumber) {
      return firstNumber / secondNumber;
    }

    isInvalidNumber(firstNumber, secondNumber) {
      if (secondNumber === 0) return true;
      return false;
    }
    toString() {
      return "DivideOperation";
    }
  }

  return DivideOperation;
})();
