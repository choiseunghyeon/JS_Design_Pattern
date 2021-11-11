export default class AbstractHandler {
  constructor(operand) {
    this.operand = operand;
    this.next = null;
  }

  setNext(next) {
    this.next = next;
    return this.next;
  }

  handleRequest(request) {
    if (this.hasOperand()) {
      let result = this.operate(request);
      request.setResult(result);

      if (this.next !== null) {
        this.next.handleRequest(request);
      }
    }
  }

  makeEquation(request) {
    let desc = this.getEquation(request);
    request.appendEquation(desc);

    if (this.next !== null) {
      this.next.appendEquation(request);
    }
  }

  getOperandValue() {
    return this.operand.getValue();
  }

  getOperandDesc() {
    return this.hasOperand() ? this.operand.getDesc() : "";
  }

  operate(request) {
    throw new Error("implement this method");
  }

  getEquation(request) {
    throw new Error("implement this method");
  }

  hasOperand() {
    if (this.operand !== null) {
      return true;
    }

    return false;
  }

  isOperation() {
    return false;
  }

  getOperand() {
    return this.operand;
  }

  setOperand(operand) {
    this.operand = operand;
  }
}
