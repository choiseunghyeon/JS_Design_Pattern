CALC.createNameSpace("CALC.chain.AbstractOperationHandler");

CALC.chain.AbstractOperationHandler = (function() {

	let AbstractHandler = CALC.chain.AbstractHandler;
	
	class AbstractOperationHandler extends AbstractHandler {
		
		constructor(operand) {
			super(operand);
		}
		
		getOperator() {
			throw new Error("You have to implement the method doSomething!");
		}

		getEquation(request) {
			return " " + this.getOperator() + " " + this.getOperandDesc();
		}

		isOperation() {
			return true;
		}

		operateNumber(firstNumber, secondNumber) {
			throw new Error("You have to implement the method doSomething!");
		}
		
	}

	return AbstractOperationHandler;

}());
