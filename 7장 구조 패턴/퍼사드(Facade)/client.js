let calculator = CalculatorFacade();

let expressions = ["100+20", "100-20", "100*20", "100/20"];
expressions.forEach(expression => {
  calculator.calculate(expression);
});
