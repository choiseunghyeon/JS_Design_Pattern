CALC.createNameSpace("CALC.chain.DivideOperationHandler");

CALC.chain.DivideOperationHandler = (function() {

	let AbstractOperationHandler = CALC.chain.AbstractOperationHandler;
	
	class DivideOperationHandler extends AbstractOperationHandler {
		
		constructor(operand) {
			super(operand);
		}
		
		operate(request) {
			let firstNumber = request.getResult();
			let secondNumber = this.getOperandValue();

			return firstNumber / secondNumber;
		}

		getOperator() {
			return "/";
		}

		operateNumber(firstNumber, secondNumber) {
			return firstNumber / secondNumber;
		}
		
	}

	return DivideOperationHandler;

}());
