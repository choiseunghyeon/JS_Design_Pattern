CALC.createNameSpace("CALC.operand.funct.PercentFunctionOperand");

CALC.operand.funct.PercentFunctionOperand = (function() {

	let AbstractFunctionOperand = CALC.operand.funct.AbstractFunctionOperand;
	
	class PercentFunctionOperand extends AbstractFunctionOperand {
		
		constructor(operand) {
	        super(operand);
	        
	        this.percent = 0;
	    }
		
		getValue() {
	        return parseFloat(this.operand.getValue()) * this.percent;
	    }

		getDesc() {
	        return "Percent(" + this.operand.getDesc() + ")";
	    }

		setPercent(percent) {
	        this.percent = percent;
	    }
		
	}

	return PercentFunctionOperand;

}());	
