CALC.createNameSpace("CALC.operand.AbstractOperand");

CALC.operand.AbstractOperand = (function() {
	
	class AbstractOperand {
		
		constructor(operand) {

		}

		getValue() {
			throw new Error("You have to implement the method doSomething!");
		}

		getDesc() {
			throw new Error("You have to implement the method doSomething!");
		}

		isNumber() {
			return false;
		}
		
	}

	

	return AbstractOperand;

}());
