CALC.createNameSpace("CALC.command.CalcCommandReceiver");

CALC.command.CalcCommandReceiver = (function() {
	
	let IContext = CALC.state.IContext;
	
	class CalcCommandReceiver extends IContext {
		
		constructor() {
			super();
			
	        this.displayView = null;
	        this.equationView = null;
	        this.stateView = null;
	        
	        this.model = null;
	    }
	    
	    updateDisplayView() {
	        this.displayView.redraw();
	    }

	    updateEquationView() {
	        this.equationView.redraw();
	    }
	    
	    updateStateView() {
	    	this.stateView.redraw();
	    }
	    
	    updateView() {
	        this.updateEquationView();
	        this.updateDisplayView();
	    }
	        
	    setEquationView(equationView) {
	        this.equationView = equationView;
	    }

	    setDisplayView(displayView) {
	        this.displayView = displayView;
	    }
	    
	    actionOperator(actionCommand) {
	        let state = this.model.getState();
	    	state.handleOperator(this, actionCommand);
	    }
	    
	    actionEqual() {
	        let state = this.model.getState();
	    	state.handleEqual(this);
	    }
	    
	    actionNumber(actionCommand) {
	        let state = this.model.getState();
	        state.handleNumber(this, actionCommand);
	    }
	    
	    setStateView(stateView) {
	    	this.stateView = stateView;
	    }

	    setModel(model) {
	        this.model = model;
	    }
	       
	    addHandler(handler) {
	        this.model.addHandler(handler);
	    }
	       
	    appendInputToDisplay(input) {
	        let lastOperand = this.getLastOperand();
	        
	        if (lastOperand !== null) {
	            if (lastOperand.isNumber()) {
	                lastOperand.append(input);
	            }
	        }
	    }
	       
	    getLastHandler() {
	        return this.model.getLastHandler();
	    }
	       
	    getLastOperand() {
	        let lastHandler = this.getLastHandler();
	        
	        if (lastHandler !== null) {
	            return lastHandler.getOperand();
	        }
	        
	        return null;
	    }
	        
	    getResultExceptLast() {
	        return this.model.getResultExceptLast();
	    }
	      
	    getResultText() {
	        return this.model.getResultText();
	    }
	    
	    initHandler() {
	        this.model.initHandler();
	    }
	       
	    replaceHandler(handler) {
	        this.model.replaceHandler(handler);
	    }
	       
	    setLastOperand(operand) {
	        let lastHandler = this.getLastHandler();
	        
	        if (lastHandler !== null) {
	            lastHandler.setOperand(operand);
	        }
	    }
	    
	    changeState(state) {
	    	this.model.setState(state);

	    	this.updateStateView();
	    }
	    
	    clearAll() {
	        this.initHandler();
	    }

	    clearBack() {
	        let lastNumberOperand = this.getLastNumberOperand();
	        
	        if (lastNumberOperand !== null) {
	            lastNumberOperand.clearBack();
	        }
	    }

	    clearInput() {
	        let lastNumberOperand = this.getLastNumberOperand();
	        
	        if (lastNumberOperand !== null) {
	            lastNumberOperand.clearInput();
	        }
	    }
	    
	    actionClear() {
	        let state = this.model.getState();
	        state.handleClear(this);
	    }

	    actionClearBack() {
	        let state = this.model.getState();
	        state.handleClearBack(this);
	    }

	    actionClearError() {
	        let state = this.model.getState();
	        state.handleClearError(this);
	    }
	    
	    getLastNumberOperand() {
	        let lastOperand = this.getLastOperand();
	        
	        if (lastOperand !== null) {
	            if (lastOperand.isNumber()) {
	                return lastOperand;
	            }
	        }
	        
	        return null
	    }
	    
	    actionFunction(actionCommand) {
	    	let state = this.model.getState();
	    	state.handleFunction(this, actionCommand);
	    }
	    
	    actionPlusMinus() {
		    let state = this.model.getState();
		    state.handlePlusMinus(this);
	    }
	    
	    appendInputToDisplayByPlusMinus() {
		    let lastNumberOperand = this.getLastNumberOperand();
		
		    if (lastNumberOperand !== null) {
			    let lastNumberOperandValue = lastNumberOperand.getValue();
			
			    let numByPlusMinus = lastNumberOperandValue * (-1);
			
			    if (lastNumberOperand !== null) {
				    lastNumberOperand.clearInput();
				
				    let input = CALC.app.CalcUtil.getDisplayNumber(numByPlusMinus)
				    lastNumberOperand.append(input);
			    }
		    }
	    }
	    
	    toString() {
		    return "CalcCommandReceiver";
		}
		
	}
	
	return CalcCommandReceiver;

}());
