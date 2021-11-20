CALC.createNameSpace("CALC.chain.MultiplyOperationHandler");

CALC.chain.MultiplyOperationHandler = (function() {

	let AbstractOperationHandler = CALC.chain.AbstractOperationHandler;
	
	class MultiplyOperationHandler extends AbstractOperationHandler {
		
		constructor(operand) {
			super(operand);
		}
		
		operate(request) {
			let firstNumber = request.getResult();
			let secondNumber = this.getOperandValue();

			return firstNumber * secondNumber;
		}

		getOperator() {
			return "*";
		}

		operateNumber(firstNumber, secondNumber) {
			return firstNumber * secondNumber;
		}
		
	}

	return MultiplyOperationHandler;

}());
