CALC.createNameSpace("CALC.model.CalcModel");

CALC.model.CalcModel = (function() {
	
	let OperandHandler = CALC.chain.OperandHandler;
	let NumberOperand = CALC.operand.NumberOperand;
	
	let AbstractOperationHandler = CALC.chain.AbstractOperationHandler;
	let Request = CALC.chain.Request;
	let CalcUtil = CALC.app.CalcUtil;
	
	class CalcModel {
		
		constructor() {
			this.handlerList = [];
	        
	        let operandHandler = new OperandHandler(new NumberOperand(null));
	        this.handlerList.push(operandHandler);
	        
	        this.state = null;
		}	
	    
	    getDisplayEquationText() {
	        if (this.state !== null) {
	    		return this.state.getEquationText(this);
	    	}
	    	
	    	return null;
	    }

	    getDisplayText() {
	        if (this.state !== null) {
	    		return this.state.getDisplayText(this);
	    	}
	    	
	    	return null;
	    }
	    
	    getDisplayStateText() {
	    	if (this.state !== null) {
	    		return String(this.state);
	    	}

	    	return null;
	    }
	    
	    invalidateChain() {
	    	for(let handler of this.handlerList) {
	    		handler.setNext(null);
	        }
	    }
	     
	    makeChain() {
	        this.invalidateChain();
	        
	        let handler = null;
	        let nextHandler = null;
	        let i = 0;
	        let handlerListSize = this.handlerList.length;
	        while (i < handlerListSize - 1) {
	            handler = this.handlerList[i];
	            nextHandler = this.handlerList[i + 1];
	            
	            handler.setNext(nextHandler);
	            
	            i += 1;
	        }
	        
	        return this.handlerList[0];
	    }
	    
	    makeChainExceptLast() {
	        this.invalidateChain();
	        
	        let handler = null;
	        let nextHandler = null;
	        let i = 0;
	        let handlerListSize = this.handlerList.length;
	        while (i < handlerListSize - 2) {
	            handler = this.handlerList[i];
	            nextHandler = this.handlerList[i + 1];
	            
	            handler.setNext(nextHandler);
	            
	            i += 1;
	        }
	        
	        return this.handlerList[0];
	    }
	    
	    getLastNumberOperand() {
	        let lastOperand = this.getLastOperand();
	        
	        if (lastOperand !== null) {
	            if (lastOperand.isNumber()) {
	                return lastOperand;
	            }
	        }
	        
	        return null;
	    }
	     
	    getLastOperand() {
	        let lastHandler = this.getLastHandler();
	        
	        if (lastHandler !== null) {
	            return lastHandler.getOperand();
	        }
	        
	        return null;
	    }
	    
	    getLastHandler() {
	        let size = this.handlerList.length;
	        
	        if (size > 0) {
	            return this.handlerList[size - 1];
	        }
	        
	        return null;
	    }
	    
	    getResult() {
	        let operandHandler = this.makeChain();
	        
	        let request = new Request();
	        
	        operandHandler.handleRequest(request);
	        
	        let result = request.getResult();
	        
	        return result;
	    }
	    
	    getResultExceptLast() {
	        let operandHandler = this.makeChainExceptLast();
	        
	        let request = new Request();
	        
	        operandHandler.handleRequest(request);
	        
	        let result = request.getResult();
	        
	        return result;
	    }
	    
	    getResultText() {
	        let result = this.getResult();
	        
	        let resultText = CalcUtil.getDisplayNumber(result);
	        
	        return resultText;
	    }
	    
	    getInputText() {
	        let lastNumberOperand = this.getLastNumberOperand();
	        
	        if (lastNumberOperand !== null) {
	            return lastNumberOperand.getInputText();
	        }
	        
	        return null;
	    }
	    
	    getEquationText() {
	        let operandHandler = this.makeChain();
	        
	        let request = new Request();
	        
	        operandHandler.makeEquation(request);
	        
	        return request.getEquation();
	    }
	    
	    getEquationTextExceptInput() {
	        let lastHandler = this.getLastHandler();
	        
	        if (lastHandler.isOperation()) {
	            let lastOperator = lastHandler.getOperator();
	            
	            let operandHandler = this.makeChainExceptLast();
	            
	            let request = new Request();
	            
	            operandHandler.makeEquation(request);
	            
	            return request.getEquation() + " " + lastOperator + " ";
	        }
	        
	        return "";
	    }
	    
	    addHandler(handler) {
	        this.handlerList.push(handler);
	    }
	    
	    initHandler() {
	        this.handlerList = [];
	        
	        let operandHandler = new OperandHandler(new NumberOperand(null));
	        
	        this.handlerList.push(operandHandler);
	    }
	     
	    replaceHandler(handler) {
	        let size = this.handlerList.length;
	        
	        if (size > 0) {
	            this.handlerList.splice(size - 1, 1);
	            
	            this.handlerList.push(handler);
	        }
	    }
	    
	    getState() {
	    	return this.state;
	    }

	    setState(state) {
	    	this.state = state;
	    }
	    
	    getFunctionResultText() {
	    	let lastOperand = this.getLastOperand();

	    	if (lastOperand !== null) {
		    	let resultText = CalcUtil.getDisplayNumber(lastOperand.getValue());
		    	return resultText;
	    	}

	    	return null;
	    }
	    
	    toString() {
		    return "CalcModel";
		}
		
	}
	
	

	return CalcModel;

}());
