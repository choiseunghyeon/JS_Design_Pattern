CALC.createNameSpace("CALC.operand.funct.PowFunctionOperand");

CALC.operand.funct.PowFunctionOperand = (function() {

	let AbstractFunctionOperand = CALC.operand.funct.AbstractFunctionOperand;
	
	class PowFunctionOperand extends AbstractFunctionOperand {
		
		constructor(operand) {
	        super(operand);
	    }
		
		getValue() {
	        return parseFloat(Math.pow(this.operand.getValue(), 2));
	    }

		getDesc() {
	        return "Pow(" + this.operand.getDesc() + ")";
	    }
		
	}

	return PowFunctionOperand;

}());	
