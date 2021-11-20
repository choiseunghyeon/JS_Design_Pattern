CALC.createNameSpace("CALC.state.InputState");

CALC.state.InputState = (function() {
	
	let IState = CALC.state.IState;
	
	class InputState extends IState {
		
		constructor() {
			super();
			
			if(InputState._instance) {
				return InputState._instance;
			}
			
			InputState._instance = this;
		}
		
		static getInstance() {
			if (!InputState._instance) {
				InputState._instance = new InputState();
			}
			
			return InputState._instance;
		}
		
	    getDisplayText(model) {
	        return model.getInputText();
	    }

	    getEquationText(model) {
	        return model.getEquationTextExceptInput();
	    }

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
	    }

	    handleEqual(context) {
	        let resultText = context.getResultText();
	        
	        let numberOperand = new CALC.operand.NumberOperand(null);
	        numberOperand.append(resultText);
	        
	        let newOperandHandler = new CALC.chain.OperandHandler(numberOperand);
	        
	        context.initHandler();
	        
	        context.addHandler(newOperandHandler);
	        
	        context.changeState(CALC.state.EqualState.getInstance());
	    }

	    handleNumber(context, actionCommand) {
	    	context.appendInputToDisplay(actionCommand);
	    }
	    
	    handleClear(context) {
	    	context.clearAll();
	    }

		handleClearBack(context) {
			context.clearBack();
		}

		handleClearError(context) {
			context.clearInput();
		}
		
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
		
				let percentFunctionOperand = new CALC.operand.funct.PercentFunctionOperand(numberOperand);
				percentFunctionOperand.setPercent(percent);
		
				context.setLastOperand(percentFunctionOperand);
			}

			context.changeState(CALC.state.FunctionState.getInstance());
		}
		
		handlePlusMinus(context) {
			context.appendInputToDisplayByPlusMinus();
		}
		
		toString() {
		    return "InputState";
		}
		
	}
	
	return InputState;
	
}());
