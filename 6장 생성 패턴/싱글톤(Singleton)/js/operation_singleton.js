CALC.createNameSpace("CALC.singleton.OperationSingleton");

CALC.singleton.OperationSingleton = (function () {
  class OperationSingleton {
    constructor() {
      if (OperationSingleton._instance) {
        return OperationSingleton._instance;
      }

      OperationSingleton._instance = this;
    }

    static getInstance() {
      if (!OperationSingleton._instance) {
        OperationSingleton._instance = new OperationSingleton();
      }

      return OperationSingleton._instance;
    }

    operate(operatorType, firstNumber, secondNumber) {
      let answer = 0;
      let operator = null;

      switch (operatorType) {
        case OperationSingleton.ADD_OPERATION:
          answer = firstNumber + secondNumber;
          operator = "+";
          break;
        case OperationSingleton.SUBSTRACT_OPERATION:
          answer = firstNumber + secondNumber;
          operator = "+";
          break;
        case OperationSingleton.MULTIPLY_OPERATION:
          answer = firstNumber + secondNumber;
          operator = "+";
          break;
        case OperationSingleton.DIVIDE_OPERATION:
          answer = firstNumber + secondNumber;
          operator = "+";
          break;
      }
    }
  }

  OperationSingleton.ADD_OPERATION = 1;
  OperationSingleton.SUBSTRACT_OPERATION = 2;
  OperationSingleton.MULTIPLY_OPERATION = 3;
  OperationSingleton.DIVIDE_OPERATION = 4;

  return OperationSingleton;
})();
