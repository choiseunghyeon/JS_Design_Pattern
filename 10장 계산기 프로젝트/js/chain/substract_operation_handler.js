CALC.createNameSpace("CALC.chain.SubstractOperationHandler");

CALC.chain.SubstractOperationHandler = (function() {

	let AbstractOperationHandler = CALC.chain.AbstractOperationHandler;
	
	class SubstractOperationHandler extends AbstractOperationHandler {
		
		constructor(operand) {
			super(operand);
		}
		
		operate(request) {
			let firstNumber = request.getResult();
			let secondNumber = this.getOperandValue();

			return firstNumber - secondNumber;
		}

		getOperator() {
			return "-";
		}

		operateNumber(firstNumber, secondNumber) {
			return firstNumber - secondNumber;
		}
		
	}

	return SubstractOperationHandler;

}());
