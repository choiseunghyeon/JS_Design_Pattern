CALC.createNameSpace("CALC.ocp.before.Client");

CALC.ocp.before.Client = (function () {
  class Client {
    constructor() {}

    main() {
      let after = CALC.ocp.before;

      let calculator = new after.Calculator();

      let firstNumber = 100;
      let secondNumber = 20;

      let operation = new after.AddOperation();
      calculator.setOperation(operation);
      let answer = calculator.calculate(firstNumber, secondNumber);
      console.log(firstNumber + "+" + secondNumber + " = " + answer);

      operation = new after.SubtractOperation();
      calculator.setOperation(operation);
      answer = calculator.calculate(firstNumber, secondNumber);
      console.log(firstNumber + "-" + secondNumber + " = " + answer);

      operation = new after.MultiplyOperation();
      calculator.setOperation(operation);
      answer = calculator.calculate(firstNumber, secondNumber);
      console.log(firstNumber + "*" + secondNumber + " = " + answer);

      operation = new after.DivideOperation();
      calculator.setOperation(operation);
      answer = calculator.calculate(firstNumber, secondNumber);
      console.log(firstNumber + "/" + secondNumber + " = " + answer);
    }

    toString() {
      return "Client";
    }
  }
  return Client;
})();
