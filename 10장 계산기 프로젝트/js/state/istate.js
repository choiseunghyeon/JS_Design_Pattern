CALC.createNameSpace("CALC.state.IState");

CALC.state.IState = (function() {
	
	class IState {
		
		constructor() {
			
		}

	    handleOperator(context, actionCommand) {
	        throw new Error("You have to implement the method doSomething!");
	    }
	    
	    handleEqual(context) {
	        throw new Error("You have to implement the method doSomething!");
	    }
	    
	    handleNumber(context, actionCommand) {
	        throw new Error("You have to implement the method doSomething!");
	    }
	    
	    getDisplayText(model) {
	        throw new Error("You have to implement the method doSomething!");
	    }
	    
	    getEquationText(model) {
	        throw new Error("You have to implement the method doSomething!");
	    }
	    
	    handleClear(context) {
	        throw new Error("You have to implement the method doSomething!");
	    }
	    
	    handleClearBack(context) {
	        throw new Error("You have to implement the method doSomething!");
	    }
	    
	    handleClearError(context) {
	        throw new Error("You have to implement the method doSomething!");
	    }
	    
	    handleFunction(context, actionCommand) {
	        throw new Error("You have to implement the method doSomething!");
	    }
	   
	    handlePlusMinus(context) {
	        throw new Error("You have to implement the method doSomething!");
	    }
		
	}
	
	return IState;
	
}());    
