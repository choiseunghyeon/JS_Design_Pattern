let calculator = new Calculator();

let firstNumber = 100,
  secondNumber = 20;

let firstNumberEquation = new NumberExpression(firstNumber);
calculator.setExpression(firstNumberEquation);
console.log(`firstNumber =  ${calculator.calculate()}`);

let secondNumberEquation = new NumberExpression(secondNumber);
calculator.setExpression(secondNumberEquation);
console.log(`secondNumberEquation =  ${calculator.calculate()}`);

let addOperatorEquation = new AddOperationExpression();
addOperatorEquation.addOperandExpression(firstNumberEquation);
addOperatorEquation.addOperandExpression(secondNumberEquation);

calculator.setExpression(addOperatorEquation);
console.log(`${firstNumber} + ${secondNumber} = ${calculator.calculate()}`);

calculator.setExpression(new SqrtDecoratorExpression(addOperatorEquation));
console.log(`SQRT(${firstNumber} + ${secondNumber}) = ${calculator.calculate()}`);

let exponent = 2;
calculator.setExpression(new PowDecoratorExpression(addOperatorEquation));
console.log(`POW(${firstNumber} + ${secondNumber}) = ${calculator.calculate()}`);
