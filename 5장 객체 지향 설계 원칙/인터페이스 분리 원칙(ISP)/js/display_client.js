CALC.createNameSpace("CALC.isp.before.DisplayClient");

CALC.isp.before.DisplayClient = (function () {
  class DisplayClient {
    constructor() {}

    request(displayable, operation, firstNumber, secondNumber) {
      displayable.newDisplay(operation, firstNumber, secondNumber);
    }

    toString() {
      return "CalcClient";
    }
  }

  return DisplayClient;
})();
