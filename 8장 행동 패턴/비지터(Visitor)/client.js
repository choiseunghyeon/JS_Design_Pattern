class Calculator {
  constructor() {
    this.expression = null;
    this.variableToValueMap = {};
  }

  calculate() {
    if (this.expression != null) {
      for (const variableName in this.variableToValueMap) {
        if (!this.variableToValueMap.hasOwnProperty(variableName)) {
          continue;
        }

        let value = this.variableToValueMap[variableName];

        let setValueToVariableVisitor = new SetValueToVariableVisitor(variableName, value);

        this.expression.accept(setValueToVariableVisitor);
      }

      return this.expression.operate();
    }
    return 0;
  }

  setExpression(expression) {
    this.expression = expression;
  }

  addVariableToValue(variableName, value) {
    this.variableToValueMap[variableName] = value;
  }
}

class AbstractVisitor {
  visit(expression) {
    throw new Error("implement this method");
  }
}

class SetValueToVariableVisitor extends AbstractVisitor {
  constructor(variableName, value) {
    super();
    this.variableName = variableName;
    this.value = value;
  }

  visit(expression) {
    if (expression.getName() === this.variableName) {
      expression.setValue(this.value);
    }
  }
}

class AbstractExpression {
  operate() {
    throw new Error("implement this method");
  }

  accept(v) {}
}

class AbstractOperationExpression extends AbstractExpression {
  constructor() {
    super();
    this.operandList = [];
  }

  addOperandExpression(operandExpression) {
    this.operandList.push(operandExpression);
  }

  accept(v) {
    for (const operandExpression of this.operandList) {
      operandExpression.accept(v);
    }
  }
}

class NumberExpression extends AbstractExpression {
  constructor(value) {
    super();
    this.value = value;
  }

  operate() {
    return this.value;
  }
}

class AddOperationExpression extends AbstractOperationExpression {
  constructor() {
    super();
  }

  operate() {
    let firstOperandExpression = this.operandList[0];
    let secondOperandExpression = this.operandList[1];

    let firstResult = firstOperandExpression.operate();
    let secondResult = secondOperandExpression.operate();

    return firstResult + secondResult;
  }
}
class SubstractOperationExpression extends AbstractOperationExpression {
  constructor() {
    super();
  }

  operate() {
    let firstOperandExpression = this.operandList[0];
    let secondOperandExpression = this.operandList[1];

    let firstResult = firstOperandExpression.operate();
    let secondResult = secondOperandExpression.operate();

    return firstResult - secondResult;
  }
}
class MultiplyOperationExpression extends AbstractOperationExpression {
  constructor() {
    super();
  }

  operate() {
    let firstOperandExpression = this.operandList[0];
    let secondOperandExpression = this.operandList[1];

    let firstResult = firstOperandExpression.operate();
    let secondResult = secondOperandExpression.operate();

    return firstResult - secondResult;
  }
}

class VariableExpression extends AbstractExpression {
  constructor(name) {
    super();

    this.name = name;
    this.value = 0;
  }

  operate() {
    return this.value;
  }

  accept(v) {
    v.visit(this);
  }

  getName() {
    return this.name;
  }

  setValue(value) {
    this.value = value;
  }
}

let calculator = new Calculator();

let firstNumber = 100;
let firstNumberEquation = new NumberExpression(firstNumber);
let secondNumberEquation = new VariableExpression("ABC");

let addOperationExpression = new AddOperationExpression();
addOperationExpression.addOperandExpression(firstNumberEquation);
addOperationExpression.addOperandExpression(secondNumberEquation);

calculator.setExpression(addOperationExpression);

let variableName = "ABC";
let value = 80;

console.log("ABC = " + value);
calculator.addVariableToValue(variableName, value);

console.log("100 + ABC = " + calculator.calculate());
