class IContext {
  changeState(state) {
    throw new Error("implement this method");
  }
  updateDisplay(text) {
    throw new Error("implement this method");
  }
  appendInputToDisplay(input) {
    throw new Error("implement this method");
  }
  isOperator(actionCommand) {
    throw new Error("implement this method");
  }
  calculate() {
    throw new Error("implement this method");
  }
  setLastOperator(lastCommand) {
    throw new Error("implement this method");
  }
}

class IState {
  action(context, actionCommand) {
    throw new Error("implement this method");
  }
}

class InputState extends IState {
  constructor() {
    super();
    if (InputState._instance) {
      return InputState._instance;
    }

    InputState._instance = this;
  }

  static getInstance() {
    if (!InputState._instance) {
      InputState._instance = new InputState();
    }

    return InputState._instance;
  }

  action(context, actionCommand) {
    let OperatorState = OperatorState;

    if (context.isOperator(actionCommand)) {
      context.calculate();
      context.setLastOperator(actionCommand);

      context.changeState(OperatorState.getInstance());
    } else {
      context.appendInputToDisplay(actionCommand);
    }
  }
}

class OperatorState extends IState {
  constructor() {
    super();
    if (OperatorState._instance) {
      return OperatorState._instance;
    }

    OperatorState._instance = this;
  }

  static getInstance() {
    if (!OperatorState._instance) {
      OperatorState._instance = new OperatorState();
    }

    return OperatorState._instance;
  }

  action(context, actionCommand) {
    let InputState = InputState;

    if (context.isOperator(actionCommand)) {
      context.setLastOperator(actionCommand);
    } else {
      context.updateDisplay("");
      context.appendInputToDisplay(actionCommand);
      context.changeState(InputState.getInstance());
    }
  }
}

class StartState extends IState {
  constructor() {
    super();
    if (StartState._instance) {
      return StartState._instance;
    }

    StartState._instance = this;
  }

  static getInstance() {
    if (!StartState._instance) {
      StartState._instance = new StartState();
    }

    return StartState._instance;
  }

  action(context, actionCommand) {
    let InputState = InputState;

    context.updateDisplay(actionCommand);
    context.changeState(InputState.getInstance());
  }
}
let client = new Client();

client.action("5");
client.action("5");
client.action("*");
client.action("6");
client.action("=");
