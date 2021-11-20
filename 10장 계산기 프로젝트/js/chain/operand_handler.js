CALC.createNameSpace("CALC.chain.OperandHandler");

CALC.chain.OperandHandler = (function() {

	let AbstractHandler = CALC.chain.AbstractHandler;
	
	class OperandHandler extends AbstractHandler {
		
		constructor(operand) {
	        super(operand);
	    }
	    
		operate(request) {
	        let value = this.getOperandValue();
	        
	        return value;
	    }
	    
		getEquation(request) {
			return this.getOperandDesc();
	    }
		
	}

    return OperandHandler;

}());
