CALC.createNameSpace("CALC.sip.after.SubtractOperation");
CALC.sip.after.SubtractOperation = (function () {
  class SubtractOperation {
    constructor() {}
    subtract(firstNumber, secondNumber) {
      return firstNumber - secondNumber;
    }

    toString() {
      return "SubtractOperation";
    }
  }

  return SubtractOperation;
})();
