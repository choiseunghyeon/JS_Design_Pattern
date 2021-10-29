class ISubject {
  notifyObservers() {
    throw new Error("implement this method");
  }
  registerObserver() {
    throw new Error("implement this method");
  }
  removeObserver() {
    throw new Error("implement this method");
  }
}

class AbstractOperationObserver {
  constructor(operationSubject) {
    this.operationSubject = operationSubject;
  }

  update() {
    throw new Error("implement this method");
  }

  getFirstNumber() {
    return this.operationSubject.getFirstNumber();
  }

  getSecondNumber() {
    return this.operationSubject.getSecondNumber();
  }
}

class OperationSubject extends ISubject {
  constructor() {
    super();

    this.firstNumber = 0;
    this.secondNumber = 0;

    this.observers = [];
  }

  registerObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    let index = this.observers.indexOf(observer);
    if (index >= 0) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers() {
    for (const observer of this.observers) {
      observer.update();
    }
  }

  getFirstNumber() {
    return this.firstNumber;
  }

  getSecondNumber() {
    return this.secondNumber;
  }

  setNumber(firstNumber, secondNumber) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;

    this.notifyObservers();
  }
}

class AddOperationObserver extends AbstractOperationObserver {
  constructor(operationSubject) {
    super(operationSubject);
  }

  update() {
    let firstNumber = this.getFirstNumber();
    let secondNumber = this.getSecondNumber();

    let answer = firstNumber + secondNumber;

    console.log(`${firstNumber} + ${secondNumber} = ${answer}`);
  }
}

class SubstractOperationObserver extends AbstractOperationObserver {
  constructor(operationSubject) {
    super(operationSubject);
  }

  update() {
    let firstNumber = this.getFirstNumber();
    let secondNumber = this.getSecondNumber();

    let answer = firstNumber - secondNumber;

    console.log(`${firstNumber} - ${secondNumber} = ${answer}`);
  }
}

class MultiplyOperationObserver extends AbstractOperationObserver {
  constructor(operationSubject) {
    super(operationSubject);
  }

  update() {
    let firstNumber = this.getFirstNumber();
    let secondNumber = this.getSecondNumber();

    let answer = firstNumber * secondNumber;

    console.log(`${firstNumber} * ${secondNumber} = ${answer}`);
  }
}

let operationSubject = new OperationSubject();

let addObserver = new AddOperationObserver(operationSubject);
let substractObserver = new SubstractOperationObserver(operationSubject);
let multiplyObserver = new MultiplyOperationObserver(operationSubject);

operationSubject.registerObserver(addObserver);
operationSubject.registerObserver(substractObserver);
operationSubject.registerObserver(multiplyObserver);

let firstNumber = 100;
let secondNumber = 20;

operationSubject.setNumber(firstNumber, secondNumber);

firstNumber = 200;
secondNumber = -30;

operationSubject.setNumber(firstNumber, secondNumber);
