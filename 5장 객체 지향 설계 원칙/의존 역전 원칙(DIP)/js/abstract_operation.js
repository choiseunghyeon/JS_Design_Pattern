CALC.createNameSpace("CALC.dip.before.AbstractOperation");
CALC.dip.before.AbstractOperation = (function () {
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
