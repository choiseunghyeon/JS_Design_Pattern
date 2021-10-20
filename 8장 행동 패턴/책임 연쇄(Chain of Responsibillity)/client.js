let addOperationHandler = new AddOperationHandler("+");
let substractOperationHandler = new SubstractOperationHandler("-");
let multiplyOperationHandler = new MultiplyOperationHandler("-");

addOperationHandler.setNext(substractOperationHandler).setNext(multiplyOperationHandler);

let requests = [new Request("100+20"), new Request("100-20"), new Request("100*20")];

requests.forEach(req => {
  let answer = addOperationHandler.handleRequest(req);
  let expression = request.getExpression();

  console.log(expression + "=" + answer);
});

class Request {
  constructor(expression) {
    this.expression = expression;
  }

  getExpression() {
    return this.expression;
  }

  getFirstNumber(operator) {
    let operatorIndex = this.expression.indexOf(operator);

    let firstNumber = this.expression.substring(0, operatorIndex);
    return parseInt(firstNumber, 10);
  }

  getSecondNumber(operator) {
    let operatorIndex = this.expression.indexOf(operator);

    let secondNumber = this.expression.substring(operatorIndex + 1);
    return parseInt(secondNumber, 10);
  }
}

class AbstractoperationHandler {
  constructor(operator) {
    this.operator = operator;
    this.next = null;
  }

  setNext(next) {
    this.next = next;
    return next;
  }

  handleRequest(request) {
    if (this.resolve(request)) {
      let result = this.operate(request);
      return result;
    } else if (this.next != null) {
      return this.next.handleRequest(request);
    } else {
      this.handleFail(request);
      return 0;
    }
  }

  handleFail(request) {
    console.log("fail");
  }

  getOperator() {
    return this.operator;
  }

  operate(request) {
    throw new Error("implement this method");
  }

  resolve(request) {
    if (request.getExpression().indexOf(this.getOperator()) >= 0) {
      return true;
    }
    return false;
  }
}

class AddOperationHandler extends AbstractoperationHandler {
  constructor(operator) {
    suepr(operator);
  }

  operate(request) {
    let operator = this.getOperator();

    return request.getFirstNumber(operator) + request.getSecondNumber(operator);
  }
}
class SubstractOperationHandler extends AbstractoperationHandler {
  constructor(operator) {
    suepr(operator);
  }

  operate(request) {
    let operator = this.getOperator();

    return request.getFirstNumber(operator) - request.getSecondNumber(operator);
  }
}
class MultiplyOperationHandler extends AbstractoperationHandler {
  constructor(operator) {
    suepr(operator);
  }

  operate(request) {
    let operator = this.getOperator();

    return request.getFirstNumber(operator) * request.getSecondNumber(operator);
  }
}
