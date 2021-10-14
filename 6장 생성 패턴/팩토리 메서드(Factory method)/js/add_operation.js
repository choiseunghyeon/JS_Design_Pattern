import AbstractOperation from "./abstract_operation";

export default class AddOperation extends AbstractOperation {
  constructor() {
    super();
  }

  getOperator() {
    return new AddOperation();
  }
}
