CALC.createNameSpace("CALC.chain.AddOperationHandler");

CALC.chain.AddOperationHandler = (function() {

	let AbstractOperationHandler = CALC.chain.AbstractOperationHandler;
	
	class AddOperationHandler extends AbstractOperationHandler {
		
		constructor(operand) {
			super(operand);
		}

		operate(request) {
			let firstNumber = request.getResult();
			let secondNumber = this.getOperandValue();

			return firstNumber + secondNumber;
		}

		getOperator() {
			return "+";
		}

		operateNumber(firstNumber, secondNumber) {
			return firstNumber + secondNumber;
		}
		
	}

	return AddOperationHandler;

}());
