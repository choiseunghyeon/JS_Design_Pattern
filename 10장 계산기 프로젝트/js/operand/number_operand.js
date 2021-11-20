CALC.createNameSpace("CALC.operand.NumberOperand");

CALC.operand.NumberOperand = (function() {

	let AbstractOperand = CALC.operand.AbstractOperand;
	
	class NumberOperand extends AbstractOperand {
		
		constructor(input) {
	        super();
	        
	        this.inputs = [];
	        
	        if (input !== null) {
	            this.inputs.push(input);
	        }
	    }
	    
	    getValue() {
	        let inputText = this.getInputText();
	        
	        if (inputText.length > 0) {
	            return parseFloat(inputText);
	        }
	        
	        return 0;
	    }

	    getDesc() {
	        return this.getInputText();
	    }
	    
	    append(input) {
	        this.inputs.push(input);
	    }

	    clearBack() {
	        let size = this.inputs.length;
	        
	        if (size > 0) {
	        	this.inputs.splice(size - 1, 1);
	        }
	    }

	    clearInput() {
	        this.inputs = [];
	    }

	    getInputText() {
	        let sb = "";
	        
	        for(let input of this.inputs) {
	            sb += String(input);
	        }
	        
	        return sb;
	    }

	    isNumber() {
	        return true;
	    }
		
	}

    return NumberOperand;

}());
