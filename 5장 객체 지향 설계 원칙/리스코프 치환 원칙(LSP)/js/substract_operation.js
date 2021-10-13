CALC.createNameSpace("CALC.lsp.before.SubtractOperation");
CALC.lsp.before.SubtractOperation = (function () {
  let AbstractOperation = CALC.lsp.before.AbstractOperation;
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
