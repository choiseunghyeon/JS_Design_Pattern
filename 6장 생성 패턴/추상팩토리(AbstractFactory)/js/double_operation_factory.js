import AbstractOperationFactory from "./abstract_operation_factory";
import DoubleNumberOperandProduct from "./double_number_operand_product";
import DoubleOperationProduct from "./double_operation_product";

export default class DoubleOperationFactory extends AbstractOperationFactory {
  constructor() {
    super();
  }

  createOperationProduct() {
    return new DoubleOperationProduct();
  }

  createNumberOperandProduct() {
    return new DoubleNumberOperandProduct(value);
  }
}
