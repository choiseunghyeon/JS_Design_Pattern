import OperationAbstraction from "./operation_abstraction";

export default class RefinedOperationAbstraction extends OperationAbstraction {
  constructor(impl) {
    super(impl);
  }

  sqrt(a) {
    return Math.sqrt(a);
  }

  pow(a, b) {
    return Math.pow(a, b);
  }
}
