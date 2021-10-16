let calculator = new Calculator();

let firstNumber = 100,
  secondNumber = 20;

let firstNumberEquation = new NumberExpression(firstNumber);
calculator.setExpression(firstNumberEquation);
console.log(`firstNumber = ${calculator.calculate()}`);

let secondNumberEquation = new NumberExpression(secondNumber);
calculator.setExpression(secondNumberEquation);
console.log(`secondNumber = ${calculator.calculate()}`);

let addOperationExpression = new AddOperationExpression();
addOperationExpression.addOperandExpression(firstNumberEquation);
addOperationExpression.addOperandExpression(secondNumberEquation);
calculator.setExpression(addOperationExpression);
console.log(`${firstNumber} + ${secondNumber}  = ${calculator.calculate()}`);

let substractOperationExpression = new SubstractOperationExpression();
substractOperationExpression.addOperandExpression(firstNumberEquation);
substractOperationExpression.addOperandExpression(secondNumberEquation);
calculator.setExpression(substractOperationExpression);
console.log(`${firstNumber} + ${secondNumber}  = ${calculator.calculate()}`);
