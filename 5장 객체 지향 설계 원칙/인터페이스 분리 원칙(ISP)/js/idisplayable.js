CALC.createNameSpace("CALC.isp.before.IDisplayable");

CALC.isp.before.IDisplayable = (function () {
  class IDisplayable {
    constructor() {}

    newDisplay(operation, firstNumber, secondNumber) {
      throw new Error("You have to implement the method doSomething!");
    }

    toString() {
      return "IDisplayable";
    }
  }

  return IDisplayable;
})();
