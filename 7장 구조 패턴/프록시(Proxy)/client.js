class AbstractOperationSubject {
  constructor() {}

  operate(firstNumber, secondNumber) {
    throw new Error("implement this method");
  }
}

class AddOperationSubject extends AbstractOperationSubject {
  constructor() {
    super();
  }

  operate(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  }
}
class SubstractOperationSubject extends AbstractOperationSubject {
  constructor() {
    super();
  }

  operate(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
  }
}
class DivideOperationSubject extends AbstractOperationSubject {
  constructor() {
    super();
  }

  operate(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
  }
}

class DivideOperationProxy extends AbstractOperationSubject {
  constructor(realOperationSubject) {
    super();
    this.realOperationSubject = realOperationSubject;
  }

  operate(firstNumber, secondNumber) {
    if (secondNumber === 0) {
      throw new Error("NonZeroDivideException");
    }

    return this.realOperationSubject.operate(firstNumber, secondNumber);
  }
}

let firstNumber = 100,
  secondNumber = 20;

let operationSubject = new AddOperationSubject();
let result = operationSubject.operate(firstNumber, secondNumber);
console.log(`${firstNumber} + ${secondNumber} = ${result}`);

operationSubject = new SubstractOperationSubject();
result = operationSubject.operate(firstNumber, secondNumber);
console.log(`${firstNumber} - ${secondNumber} = ${result}`);

operationSubject = new DivideOperationProxy(new DivideOperationSubject());
result = operationSubject.operate(firstNumber, secondNumber);
console.log(`${firstNumber} / ${secondNumber} = ${result}`);

firstNumber = 10;
secondNumber = 0;

try {
  result = operationSubject.operate(firstNumber, secondNumber);
  console.log(`${firstNumber} / ${secondNumber} = ${result}`);
} catch (e) {
  console.log(e);
}
