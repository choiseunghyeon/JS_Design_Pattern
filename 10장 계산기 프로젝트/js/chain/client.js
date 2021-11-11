import OperandHandler from "./operand_handler";
import NumberOperand from "../operand/number_operand";
import Request from "./request";
import AddOperationHandler from "./add_operation_handler";
import SubstractOperationHandler from "./substract_operation_handler";
import MultiplyOperationHandler from "./multiply_operation_handler";
import DivideOperationHandler from "./divide_operation_handler";

export default class Client {
  main() {
    this.test1();
    this.test2();
    this.test3();
    this.test4();
    this.test5();
    this.test6();
  }

  test1() {
    let handlerList = [];

    let operandHandler = new OperandHandler(new NumberOperand("12"));

    handlerList.push(operandHandler);

    this.tempTest(handlerList);
  }

  test2() {
    let handlerList = [];

    let operandHandler = new OperandHandler(new NumberOperand("12"));
    let addOperationHandler = new AddOperationHandler(new NumberOperand("10"));

    handlerList.push(operandHandler);
    handlerList.push(addOperationHandler);

    this.tempTest(handlerList);
  }

  test3() {
    let handlerList = [];

    let operandHandler = new OperandHandler(new NumberOperand("12"));
    let substractOperationHandler = new SubstractOperationHandler(new NumberOperand("2"));

    handlerList.push(operandHandler);
    handlerList.push(substractOperationHandler);

    this.tempTest(handlerList);
  }

  test4() {
    let handlerList = [];

    let operandHandler = new OperandHandler(new NumberOperand("12"));
    let multiplyOperationHandler = new MultiplyOperationHandler(new NumberOperand("5"));

    handlerList.push(operandHandler);
    handlerList.push(multiplyOperationHandler);

    this.tempTest(handlerList);
  }

  test5() {
    let handlerList = [];

    let operandHandler = new OperandHandler(new NumberOperand("12"));
    let divideOperationHandler = new DivideOperationHandler(new NumberOperand("3"));

    handlerList.push(operandHandler);
    handlerList.push(divideOperationHandler);

    this.tempTest(handlerList);
  }
  test6() {
    let handlerList = [];

    let operandHandler = new OperandHandler(new NumberOperand("12"));
    let substractOperationHandler = new SubstractOperationHandler(new NumberOperand("2"));
    let multiplyOperationHandler = new MultiplyOperationHandler(new NumberOperand("5"));
    let divideOperationHandler = new DivideOperationHandler(new NumberOperand("3"));

    handlerList.push(operandHandler);
    handlerList.push(substractOperationHandler);
    handlerList.push(multiplyOperationHandler);
    handlerList.push(divideOperationHandler);

    this.tempTest(handlerList);
  }

  tempTest(handlerList) {
    let handler = null;
    let nextHandler = null;

    for (let index = 0; index < handlerList.length; index++) {
      handler = handlerList[index];
      nextHandler = handlerList[index + 1];

      handler.setNext(nextHandler);
    }

    let request = new Request();
    operandHandler.makeEquation(request);

    console.log(`request.getEquation() = ${request.getEquation()}`);

    request = new Request();
    operandHandler.handleRequest(request);

    console.log(`request.getResult() = ${request.getResult()}`);
  }
}
