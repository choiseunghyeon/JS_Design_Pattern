CALC.createNameSpace("CALC.operand.funct.FracFunctionOperand");

CALC.operand.funct.FracFunctionOperand = (function() {

	let AbstractFunctionOperand = CALC.operand.funct.AbstractFunctionOperand;

	class FracFunctionOperand extends AbstractFunctionOperand {
		
		constructor(operand) {
		    super(operand);
		}
		
		getValue() {
		    return 1 / this.operand.getValue();
		}
		
		getDesc() {
		    return "Frac(" + this.operand.getDesc() + ")";
		}
		
	}

	return FracFunctionOperand;

}());	
