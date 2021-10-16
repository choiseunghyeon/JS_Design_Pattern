import AbstractNumberOperandProduct from "./abstract_number_operand_product";

export default class IntegerNumberOperandProduct extends AbstractNumberOperandProduct {
  constructor(value) {
    super(value);
  }

  getNumber() {
    return parseInt(this.getValue());
  }
}
