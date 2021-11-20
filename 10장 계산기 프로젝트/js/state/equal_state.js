CALC.createNameSpace("CALC.state.EqualState");

CALC.state.EqualState = (function() {
	
	let IState = CALC.state.IState;
	
	class EqualState extends IState {
		
		constructor() {
			super();
			
			if(EqualState._instance) {
				return EqualState._instance;
			}
			
			EqualState._instance = this;
		}
		
		static getInstance() {
			if (!EqualState._instance) {
				EqualState._instance = new EqualState();
			}
			
			return EqualState._instance;
		}
		
	    getDisplayText(model) {
	        return model.getResultText()
	    }

	    getEquationText(model) {
	        return ""
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
	        
	        context.changeState(EqualState.getInstance());
	    }

	    handleEqual(context) {
	        
	    }
	        
	    handleNumber(context, actionCommand) {
	        let input = actionCommand
	        
	        let numberOperand = new CALC.operand.NumberOperand(null)
	        numberOperand.append(input)
	        
	        let newOperandHandler = new CALC.chain.OperandHandler(numberOperand)
	        
	        context.initHandler()
	        
	        context.addHandler(newOperandHandler)
	        
	        context.changeState(CALC.state.InputState.getInstance())
	    }
	    
	    handleClear(context) {
	    	context.clearAll();

	    	context.changeState(CALC.state.InputState.getInstance());
	    }

		handleClearBack(context) {
			this.handleClear(context);
		}

		handleClearError(context) {
			this.handleClear(context);
		}
		
		handleFunction(context, actionCommand) {
			let resultText = context.getResultText();

			let numberOperand = new CALC.operand.NumberOperand(null);
			numberOperand.append(resultText)

			if (actionCommand === "SQRT") {
				context.setLastOperand(new funct.SqrtFunctionOperand(numberOperand));
			}
			else if (actionCommand === "POW") {
				context.setLastOperand(new funct.PowFunctionOperand(numberOperand));
			}
			else if (actionCommand === "FRAC") {
				context.setLastOperand(new funct.FracFunctionOperand(numberOperand));
			}
			else if (actionCommand === "%") {
				let result = parseFloat(resultText);
		
				let percent = result / 100.0;
		
				let numberOperand2 = new CALC.operand.NumberOperand(result);
		
				let percentFunctionOperand = new funct.PercentFunctionOperand(numberOperand2);
				percentFunctionOperand.setPercent(percent);
		
				context.setLastOperand(percentFunctionOperand);
			}

			context.changeState(CALC.state.FunctionState.getInstance());
		}
		
		handlePlusMinus(context) {
			context.appendInputToDisplayByPlusMinus();
		}
		
		toString() {
		    return "EqualState";
		}
		
	}
	
	return EqualState;
	
}());
