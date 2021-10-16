export default class AbstractOperationFactory {
  constructor() {}

  createOperationProduct() {
    throw new Error("implement this method");
  }

  createNumberOperandProduct(value) {
    throw new Error("implement this method");
  }
}
