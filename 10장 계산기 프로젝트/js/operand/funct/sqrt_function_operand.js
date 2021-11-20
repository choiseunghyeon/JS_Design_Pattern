CALC.createNameSpace("CALC.operand.funct.SqrtFunctionOperand");

CALC.operand.funct.SqrtFunctionOperand = (function() {

	let AbstractFunctionOperand = CALC.operand.funct.AbstractFunctionOperand;
	
	class SqrtFunctionOperand extends AbstractFunctionOperand {
		
		constructor(operand) {
	        super(operand);
	    }
		
		getValue() {
	        return parseFloat(Math.sqrt(this.operand.getValue()));
	    }

		getDesc() {
	        return "Sqrt(" + this.operand.getDesc() + ")";
	    }
		
	}

	return SqrtFunctionOperand;

}());	
