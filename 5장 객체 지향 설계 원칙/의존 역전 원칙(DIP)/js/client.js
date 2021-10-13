CALC.createNameSpace("CALC.isp.before.Client");

CALC.lsp.before.Client = (function () {
  class Client {
    constructor() {}

    main() {
      let before = CALC.isp.before;

      let calculator = new before.Calculator();

      let firstNumber = 100;
      let secondNumber = 20;

      let operation = new before.AddOperation();
      calculator.setOperation(operation);
      let answer = calculator.calculate(firstNumber, secondNumber);
      console.log(firstNumber + "+" + secondNumber + " = " + answer);

      let operation = new before.SubtractOperation();
      calculator.setOperation(operation);
      let answer = calculator.calculate(firstNumber, secondNumber);
      console.log(firstNumber + "-" + secondNumber + " = " + answer);

      let operation = new before.MultiplyOperation();
      calculator.setOperation(operation);
      let answer = calculator.calculate(firstNumber, secondNumber);
      console.log(firstNumber + "*" + secondNumber + " = " + answer);

      let operation = new before.DivideOperation();
      calculator.setOperation(operation);
      let answer = calculator.calculate(firstNumber, secondNumber);
      console.log(firstNumber + "/" + secondNumber + " = " + answer);
    }

    toString() {
      return "Client";
    }
  }
  return Client;
})();
