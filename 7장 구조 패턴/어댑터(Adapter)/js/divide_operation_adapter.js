import AbstractOperationTarget from "./abstract_operation_target";
import OperationAdaptee from "./operation_adaptee";

export default class DivideOperationAdapter extends AbstractOperationTarget {
  constructor(operationAdaptee) {
    super();

    this.operationAdaptee = operationAdaptee;
  }

  operate(firstNumber, secondNumber) {
    this.operationAdaptee.calculate(OperationAdaptee.DIVIDE_OPERATION, firstNumber, secondNumber);
  }
}
