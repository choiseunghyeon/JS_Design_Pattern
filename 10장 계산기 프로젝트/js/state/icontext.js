CALC.createNameSpace("CALC.state.IContext");

CALC.state.IContext = (function() {
	
	class IContext {
		
		constructor() {
			
		}

	    changeState(state) {
	        throw new Error("You have to implement the method doSomething!");
	    }

	    replaceHandler(handler) {
	        throw new Error("You have to implement the method doSomething!");
	    }
	    
	    appendInputToDisplay(_input) {
	        throw new Error("You have to implement the method doSomething!");
	    }
	    
	    getResultText() {
	        throw new Error("You have to implement the method doSomething!");
	    }
	    
	    addHandler(handler) {
	        throw new Error("You have to implement the method doSomething!");
	    }
	    

	    setLastOperand(operand) {
	        throw new Error("You have to implement the method doSomething!");
	    }
	    
	    initHandler() {
	        throw new Error("You have to implement the method doSomething!");
	    }
	    
	    getLastOperand() {
	        throw new Error("You have to implement the method doSomething!");
	    }
	    
	    getLastHandler() {
	        throw new Error("You have to implement the method doSomething!");
	    }

	    getResultExceptLast() {
	        throw new Error("You have to implement the method doSomething!");
	    }
	    
	    clearAll() {
	        throw new Error("You have to implement the method doSomething!");
	    }
	    
	    clearBack() {
	        throw new Error("You have to implement the method doSomething!");
	    }
	    
	    clearInput() {
	        throw new Error("You have to implement the method doSomething!");
	    }
	    
	    appendInputToDisplayByPlusMinus() {
	        throw new Error("You have to implement the method doSomething!");
	    }
		
	}
	
	return IContext;
	
}());    
