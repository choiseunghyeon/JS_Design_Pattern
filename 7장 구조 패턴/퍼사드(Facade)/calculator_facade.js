import ExpressionParser from "./expression_parser";
import NumberOperand from "./number_operand";

export default class CalculatorFacade {
  constructor() {
    this.expression = null;
  }

  calculate(expression) {
    let expressionParser = new ExpressionParser();
    expressionParser.parse(expression);

    let operatorToken = expressionParser.getOperatorToken();
    let firstNumberToken = expressionParser.getFirstNumberToken();
    let secondNumberToken = expressionParser.getSecondNumberToken();

    let firstNumberOperand = new NumberOperand(firstNumberToken);
    let secondNumberOperand = new NumberOperand(secondNumberToken);

    let firstNumber = firstNumberOperand.getNumber();
    let secondNumber = secondNumberOperand.getNumber();

    let operatioFactory = new OperationFactory();
    let operationProduct = operatioFactory.createOperationProduct(operatorToken);

    operationProduct.operate(firstNumber, secondNumber);
  }
}
