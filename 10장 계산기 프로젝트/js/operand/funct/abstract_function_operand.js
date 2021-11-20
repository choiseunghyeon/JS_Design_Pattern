CALC.createNameSpace("CALC.operand.funct.AbstractFunctionOperand");

CALC.operand.funct.AbstractFunctionOperand = (function() {

	let AbstractOperand = CALC.operand.AbstractOperand;
	
	class AbstractFunctionOperand extends AbstractOperand {
		
		constructor(operand) {
			super();
			
			this.operand = operand;
		}
		
		seOperand(operand) {
			this.operand = operand;
		}
		
	}

	return AbstractFunctionOperand;

}());
