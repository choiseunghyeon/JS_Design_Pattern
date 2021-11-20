CALC.createNameSpace("CALC.state.FunctionState");

CALC.state.FunctionState = (function() {
	
	let IState = CALC.state.IState;
	
	class FunctionState extends IState {
		
		constructor() {
			super();
			
			if(FunctionState._instance) {
				return FunctionState._instance;
			}
			
			FunctionState._instance = this;
		};
		
		static getInstance() {
			if (!FunctionState._instance) {
				FunctionState._instance = new FunctionState();
			}
			
			return FunctionState._instance;
		};

	    getDisplayText(model) {
	        return model.getFunctionResultText();
	    };

	    getEquationText(model) {
	        return model.getEquationText();
	    };

	    handleOperator(context, actionCommand) {
	        if (actionCommand === "+") {
	            context.addHandler(new CALC.chain.AddOperationHandler(null));
	        }
	        else if (actionCommand === "-") {
	            context.addHandler(new CALC.chain.SubstractOperationHandler(null));
	        }
	        else if (actionCommand === "*") {
	            context.addHandler(new CALC.chain.MultiplyOperationHandler(null));
	        }
	        else if (actionCommand === "/") {
	            context.addHandler(new CALC.chain.DivideOperationHandler(null));
	        }
	        
	        context.changeState(CALC.state.OperatorState.getInstance());
	    };

	    handleEqual(context) {
	        let resultText = context.getResultText();
	        
	        let numberOperand = new CALC.operand.NumberOperand(null);
	        numberOperand.append(resultText);
	        
	        let newOperandHandler = new CALC.chain.OperandHandler(numberOperand);
	        
	        context.initHandler();
	        
	        context.addHandler(newOperandHandler);
	        
	        context.changeState(CALC.state.EqualState.getInstance());
	    };

	    handleFunction(context, actionCommand) {
	        let lastOperand = context.getLastOperand();
	        
	        if (actionCommand === "SQRT") {
	            context.setLastOperand(new CALC.operand.funct.SqrtFunctionOperand(lastOperand));
	        }
	        else if (actionCommand === "POW") {
	            context.setLastOperand(new CALC.operand.funct.PowFunctionOperand(lastOperand));
	        }
	        else if (actionCommand === "FRAC") {
	            context.setLastOperand(new CALC.operand.funct.FracFunctionOperand(lastOperand));
	        }
	        else if (actionCommand === "%") {
	            let resultExceptLast = context.getResultExceptLast();
	            
	            let percent = lastOperand.getValue() / 100.0;
	            
	            let numberOperand = new CALC.operand.NumberOperand(resultExceptLast);
	            
	            percentFunctionOperand = new CALC.operand.funct.PercentFunctionOperand(numberOperand);
	            percentFunctionOperand.setPercent(percent);
	            
	            context.setLastOperand(percentFunctionOperand);
	        }
	        
	        context.changeState(CALC.state.FunctionState.getInstance());
	    };

	    handleClear(context) {
	        context.clearAll();
	        
	        context.changeState(CALC.state.InputState.getInstance());
	    };

	    handleClearError(context) {
	        let numberOperand = new CALC.operand.NumberOperand(null);
	        context.setLastOperand(numberOperand);
	        
	        context.changeState(CALC.state.InputState.getInstance());
	    };

	    handleClearBack(context) {
	        
	    };
	        
	    handleNumber(context, actionCommand) {
	        let input = actionCommand;
	        
	        let numberOperand = new CALC.operand.NumberOperand(null);
	        numberOperand.append(input);
	        
	        let newOperandHandler = new CALC.chain.OperandHandler(numberOperand);
	        
	        context.initHandler();
	        
	        context.addHandler(newOperandHandler);
	        
	        context.changeState(CALC.state.InputState.getInstance());
	    };
	    
	    handlePlusMinus(context) {
	    	context.appendInputToDisplayByPlusMinus();
	    };
	    
		toString() {
		    return "FunctionState";
		};
		
	}
	
	return FunctionState;
	
}());
