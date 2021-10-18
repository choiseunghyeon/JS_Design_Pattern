import AddOperationProduct from "./add_operation_product";
import DivideOperationProduct from "./divide_operation_product";
import MultiplyOperationProduct from "./multiply_operation_product";
import SubstractOperationProduct from "./substract_operation_product";

export default class OperationFactory {
  constructor() {}

  createOperationProduct(operator) {
    if (operator === "+") {
      return new AddOperationProduct();
    } else if (operator === "-") {
      return new SubstractOperationProduct();
    } else if (operator === "*") {
      return new MultiplyOperationProduct();
    } else if (operator === "/") {
      return new DivideOperationProduct();
    }
  }
}
