export default class OperationAdaptee {
  constructor() {}

  calculate(operatorType, firstNumber, secodnNumber) {
    switch (operatorType) {
      case OperationAdaptee.ADD_OPERATION:
        return firstNumber + secodnNumber;
      case OperationAdaptee.SUBSTRACT_OPERATION:
        return firstNumber - secodnNumber;
      case OperationAdaptee.MULTIPLY_OPERATION:
        return firstNumber * secodnNumber;
      case OperationAdaptee.DIVIDE_OPERATION:
        return firstNumber / secodnNumber;
    }
    return;
  }
}
OperationAdaptee.ADD_OPERATION = 1;
OperationAdaptee.SUBSTRACT_OPERATION = 2;
OperationAdaptee.DIVIDE_OPERATION = 3;
OperationAdaptee.MULTIPLY_OPERATION = 4;
