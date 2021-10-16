import AbstractOperationProduct from "./abstract_operation_product";

export default class DoubleOperationProduct extends AbstractOperationProduct {
  constructor() {
    super();
  }

  print() {
    const firstNumber = this.getFirstNumber();
    const secondNumber = this.getSecondNumber();

    console.log(`${firstNumber} + ${secondNumber} =  ${this.add()}`);
    console.log(`${firstNumber} - ${secondNumber} =  ${this.add()}`);
    console.log(`${firstNumber} * ${secondNumber} =  ${this.add()}`);
    console.log(`${firstNumber} / ${secondNumber} =  ${this.add()}`);
  }
}
