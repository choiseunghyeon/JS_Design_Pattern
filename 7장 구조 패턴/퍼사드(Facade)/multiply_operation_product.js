import AbstractOperationProduct from "./abstract_operation_product";

export default class MultiplyOperationProduct extends AbstractOperationProduct {
  constructor() {
    super();
  }

  operate(firstNumber, secondNumber) {
    let answer = firstNumber * secondNumber;

    console.log(`${firstNumber} * ${secondNumber} = ${answer}`);
  }
}
