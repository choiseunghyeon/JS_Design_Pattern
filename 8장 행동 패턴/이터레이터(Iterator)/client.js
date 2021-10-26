let operationAggregate = new OperationAggregate();

operationAggregate.addOperation(new AddOperation());
operationAggregate.addOperation(new SubstractOperation());
operationAggregate.addOperation(new MultiplyOperation());

let [firstNumber, secondNumber] = [100, 20];

let calcIterator = operationAggregate.createIterator();

while (calcIterator.hasNext()) {
  let operation = calcIterator.next();
  operation.print(firstNumber, secondNumber);
}

class ICalcIterator {
  hasNext() {
    throw new Error("implement this method");
  }

  next() {
    throw new Error("implement this method");
  }
}

class AbstractAggregate {
  createIterator() {
    throw new Error("implement this method");
  }
}

class AbstractOperation {
  getAnswer(firstNumber, secondNumber) {
    throw new Error("implement this method");
  }

  print(firstNumber, secondNumber) {
    throw new Error("implement this method");
  }
}

class OperationIterator extends ICalcIterator {
  constructor(operationAggregate) {
    super();
    this.operationAggregate = operationAggregate;
    this.index = 0;
  }

  hasNext() {
    if (this.index < this.operationAggregate.getSize()) {
      return true;
    } else {
      return false;
    }
  }

  next() {
    let operation = this.operationAggregate.getOperationAt(this.index);
    this.index++;
    return operation;
  }
}

class OperationAggregate extends AbstractAggregate {
  constructor() {
    super();
    this.operations = [];
  }

  addOperation(operation) {
    this.operations.push(operation);
  }

  createIterator() {
    return new OperationIterator(this);
  }

  getOperationAt(index) {
    return this.operations[index];
  }

  getSize() {
    return this.operations.length;
  }
}

class AddOperation extends AbstractOperation {
  constructor() {
    super();
  }

  getAnswer(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  }

  print(firstNumber, secondNumber) {
    let answer = this.getAnswer(firstNumber, secondNumber);
    console.log(`${firstNumber} + ${secondNumber} = ${answer}`);
  }
}

class SubstractOperation extends AbstractOperation {
  constructor() {
    super();
  }

  getAnswer(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
  }

  print(firstNumber, secondNumber) {
    let answer = this.getAnswer(firstNumber, secondNumber);
    console.log(`${firstNumber} - ${secondNumber} = ${answer}`);
  }
}

class MultiplyOperation extends AbstractOperation {
  constructor() {
    super();
  }

  getAnswer(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
  }

  print(firstNumber, secondNumber) {
    let answer = this.getAnswer(firstNumber, secondNumber);
    console.log(`${firstNumber} * ${secondNumber} = ${answer}`);
  }
}
