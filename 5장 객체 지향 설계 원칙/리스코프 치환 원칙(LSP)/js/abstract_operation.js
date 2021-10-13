CALC.createNameSpace("CALC.lsp.before.AbstractOperation");
CALC.lsp.before.AbstractOperation = (function () {
  class AbstractOperation {
    constructor() {}

    operate(firstNumber, secondNumber) {
      throw new Error("You have to implement the method doSomething!");
    }

    isInvalidNumber(firstNumber, secondNumber) {
      return false;
    }
    toString() {
      return "AddOperation";
    }
  }

  return AbstractOperation;
})();
