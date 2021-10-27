class IColleague {
  constructor() {
    this.mediator = null;

    this.firstNumber = 100;
    this.secondNumber = 10;
  }

  getAnswer() {
    throw new Error("implement this method");
  }

  getOperator() {
    throw new Error("implement this method");
  }

  printResult() {
    console.log(`${this.getFirstNumber()} ${this.getOperator()} ${this.getSecondNumber()} = ${this.getAnswer()}`);
  }

  changeFirstNumber(firstNumber) {
    this.setFirstNumber(firstNumber);
    this.mediator.colleagueChanged(this);
  }

  changeSecondNumber(secondNumber) {
    this.setSecondNumber(secondNumber);
    this.mediator.colleagueChanged(this);
  }

  getFirstNumber() {
    return this.firstNumber;
  }

  getSecondNumber() {
    return this.secondNumber;
  }

  setFirstNumber(firstNumber) {
    this.firstNumber = firstNumber;
  }

  setSecondNumber(secondNumber) {
    this.secondNumber = secondNumber;
  }

  setMediator(mediator) {
    this.mediator = mediator;
  }
}

class AddColleague extends IColleague {
  constructor() {
    super();
  }

  getAnswer() {
    return this.getFirstNumber() + this.getSecondNumber();
  }

  getOperator() {
    return "+";
  }
}

class SubstractColleague extends IColleague {
  constructor() {
    super();
  }

  getAnswer() {
    return this.getFirstNumber() - this.getSecondNumber();
  }

  getOperator() {
    return "-";
  }
}

class MultiplyColleague extends IColleague {
  constructor() {
    super();
  }

  getAnswer() {
    return this.getFirstNumber() * this.getSecondNumber();
  }

  getOperator() {
    return "*";
  }
}

class IMediator {
  createColleagues() {
    throw new Error("implement this method");
  }

  colleagueChanged() {
    throw new Error("implement this method");
  }
}

class ClientMediator extends IMediator {
  constructor() {
    super();
    this.addColleague = new AddColleague();
    this.substractColleague = new SubstractColleague();
    this.multiplyColleague = new MultiplyColleague();

    this.createColleagues();
  }

  createColleagues() {
    this.addColleague.setMediator(this);
    this.substractColleague.setMediator(this);
    this.multiplyColleague.setMediator(this);
  }

  colleagueChanged(colleague) {
    let firstNumber = colleague.getFirstNumber();
    let secondNumber = colleague.getSecondNumber();

    this.addColleague.setFirstNumber(firstNumber);
    this.addColleague.setSecondNumber(secondNumber);
    this.addColleague.printResult();

    this.substractColleague.setFirstNumber(firstNumber);
    this.substractColleague.setSecondNumber(secondNumber);
    this.substractColleague.printResult();

    this.multiplyColleague.setFirstNumber(firstNumber);
    this.multiplyColleague.setSecondNumber(secondNumber);
    this.multiplyColleague.printResult();
  }

  getAddColleague() {
    return this.addColleague;
  }

  getSubstractColleague() {
    return this.substractColleague;
  }

  getMultiplyColleague() {
    return this.multiplyColleague;
  }
}

let clientMediator = new ClientMediator();

let colleague = clientMediator.getAddColleague();

colleague.changeFirstNumber(60);

colleague = clientMediator.getMultiplyColleague();
colleague.changeFirstNumber(80);
