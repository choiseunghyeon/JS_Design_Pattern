import AbstractOperationFactory from "./abstract_operation_factory";
import IntegerNumberOperandProduct from "./integer_number_operand_product";
import IntegerOperationProduct from "./integer_operation_product";

export default class IntegerOperationFactory extends AbstractOperationFactory {
  constructor() {
    super();
  }

  createOperationProduct() {
    return new IntegerOperationProduct();
  }

  createNumberOperandProduct(value) {
    return new IntegerNumberOperandProduct(value);
  }
}
