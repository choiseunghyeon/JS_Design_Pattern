class OperationMemento {
  constructor(firstNumber, secondNumber) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
  }

  getFirstNumber() {
    return this.firstNumber;
  }

  getSecondNumber() {
    return this.secondNumber;
  }
}

class OperationOriginator {
  constructor() {
    this.firstNumber = 0;
    this.secondNumber = 0;
  }

  createMemento() {
    return new OperationMemento(this.firstNumber, this.secondNumber);
  }

  setMemento(memento) {
    this.firstNumber = memento.getFirstNumber();
    this.secondNumber = memento.getSecondNumber();
  }

  printOperations() {
    console.log(`${this.firstNumber} + ${this.secondNumber} = ${this.firstNumber + this.secondNumber}`);
    console.log(`${this.firstNumber} - ${this.secondNumber} = ${this.firstNumber - this.secondNumber}`);
    console.log(`${this.firstNumber} * ${this.secondNumber} = ${this.firstNumber * this.secondNumber}`);
    console.log(`${this.firstNumber} / ${this.secondNumber} = ${this.firstNumber / this.secondNumber}`);
  }

  setFirstNumber(firstNumber) {
    this.firstNumber = firstNumber;
  }

  setSecondNumber(secondNumber) {
    this.secondNumber = secondNumber;
  }
}

let operationOriginator = new OperationOriginator();

operationOriginator.setFirstNumber(100);
operationOriginator.setSecondNumber(10);

operationOriginator.printOperations();

console.log("create Memnto");

let operationMemento = operationOriginator.createMemento();

operationOriginator.setFirstNumber(60);
operationOriginator.setSecondNumber(30);

operationOriginator.printOperations();

console.log("restore Memento");

operationOriginator.setMemento(operationMemento);

operationOriginator.printOperations();
