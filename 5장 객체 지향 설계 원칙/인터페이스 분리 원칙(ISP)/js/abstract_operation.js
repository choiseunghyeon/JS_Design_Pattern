CALC.createNameSpace("CALC.lsp.before.AbstractOperation");
CALC.lsp.before.AbstractOperation = (function () {
  class AbstractOperation {
    constructor() {}

    operate(firstNumber, secondNumber) {
      throw new Error("You have to implement the method doSomething!");
    }

    getOperator() {
      throw new Error("You have to implement the method doSomething!");
    }

    toString() {
      return "AddOperation";
    }
  }

  return AbstractOperation;
})();
