let receiver = new OperationCommandReceiver();
let result = receiver.getResult();
console.log(`result = ${result}`);

let addCommand = AddOperationCommand(receiver, 20);
addCommand.execute();
result = receiver.getResult();
console.log(`result + 20 = ${result}`);

let substractCommand = SubstractOperationCommand(receiver, 10);
substractCommand.execute();
result = receiver.getResult();
console.log(`result - 10 = ${result}`);

let multiplyCommand = MultiplyOperationCommand(receiver, 10);
substractCommand.execute();
result = receiver.getResult();
console.log(`result * 10 = ${result}`);

class OperationCommandReceiver {
  constructor() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  add(value) {
    this.result += value;
  }

  substract(value) {
    this.result -= value;
  }

  multiply(value) {
    this.result *= value;
  }
}

class AbstractOperationCommand {
  constructor(receiver, value) {
    this.receiver = receiver;
    this.value = value;
  }

  exeucte() {
    throw new Error("implement this method");
  }
}

class AddOperationCommand extends AbstractOperationCommand {
  constructor(receiver, value) {
    super(receiver, value);
  }

  exeucte() {
    this.receiver.add(this.value);
  }
}
class SubstractOperationCommand extends AbstractOperationCommand {
  constructor(receiver, value) {
    super(receiver, value);
  }

  exeucte() {
    this.receiver.substract(this.value);
  }
}
class MultiplyOperationCommand extends AbstractOperationCommand {
  constructor(receiver, value) {
    super(receiver, value);
  }

  exeucte() {
    this.receiver.multiply(this.value);
  }
}
