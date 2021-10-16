import AbstractNumberOperandProduct from "./abstract_number_operand_product";

export default class DoubleNumberOperandProduct extends AbstractNumberOperandProduct {
  constructor(value) {
    super(value);
  }

  getNumber() {
    let value = this.getValue();
    return parseFloat(value);
  }
}
