import AbstractOperand from "./abstract_operand";

export default class NumberOperand extends AbstractOperand {
  constructor(input) {
    super();

    this.inputs = [];

    if (input !== null) {
      this.inputs.push(input);
    }
  }

  getValue() {
    let inputText = this.getInputText();

    if (inputText.length > 0) {
      return parseFloat(inputText);
    }

    return 0;
  }

  getDesc() {
    return this.getInputText();
  }

  append(input) {
    this.inputs.push(input);
  }

  clearBack() {
    const size = this.inputs.length;
    if (size > 0) {
      this.inputs.splice(size - 1, 1);
    }
  }

  clearInput() {
    this.inputs = [];
  }

  getInputText() {
    return this.inputs.reduce((result, input) => result + String(input), "");
  }

  isNumber() {
    return true;
  }
}
