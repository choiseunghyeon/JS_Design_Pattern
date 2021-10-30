class OperationContext {
  constructor() {
    this.operationStrategy = null;
  }

  operate(firstNumber, secondNumber) {
    let answer = this.operationStrategy.getAnswer(firstNumber, secondNumber);

    let operator = this.operationStrategy.getOperator();

    let result = firstNumber + operator + secondNumber + "=" + answer;

    this.print(result);
  }

  setOperationStrategy(operationStrategy) {
    this.operationStrategy = operationStrategy;
  }

  print(result) {
    console.log(result);
  }
}

class AbstractOperationStrategy {
  getAnswer(firstNumber, secondNumber) {
    throw new Error("implement this method");
  }
  getOperator() {
    throw new Error("implement this method");
  }
}

class AddOperationStrategy extends AbstractOperationStrategy {
  constructor() {
    super();
  }

  getAnswer(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  }

  getOperator() {
    return "+";
  }
}
class SubstractOperationStrategy extends AbstractOperationStrategy {
  constructor() {
    super();
  }

  getAnswer(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
  }

  getOperator() {
    return "-";
  }
}
class MultiplyOperationStrategy extends AbstractOperationStrategy {
  constructor() {
    super();
  }

  getAnswer(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
  }

  getOperator() {
    return "*";
  }
}

let operationContext = new OperationContext();

let firstNumber = 100;
let secondNumber = 20;

const operationStrategies = [new AddOperationStrategy(), new SubstractOperationStrategy(), new MultiplyOperationStrategy()];

for (const operationStrategy of operationStrategies) {
  operationContext.setOperationStrategy(operationStrategy);
  operationContext.operate(firstNumber, secondNumber);
}
