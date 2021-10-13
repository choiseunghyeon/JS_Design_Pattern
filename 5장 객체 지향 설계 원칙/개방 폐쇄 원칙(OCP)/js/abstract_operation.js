CALC.createNameSpace("CALC.ocp.before.AbstractOperation");
CALC.ocp.before.AbstractOperation = (function () {
  class AbstractOperation {
    constructor() {}

    operate(firstNumber, secondNumber) {
      throw new Error("You have to implement the method doSomething!");
    }

    toString() {
      return "AddOperation";
    }
  }

  return AbstractOperation;
})();
