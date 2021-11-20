CALC.createNameSpace("CALC.command.FracFunctionCommand");

CALC.command.FracFunctionCommand = (function() {
	
	let AbstractCommand = CALC.command.AbstractCommand;
	
	class FracFunctionCommand extends AbstractCommand {
		
		constructor(receiver) {
	        super(receiver);
	    }
	    
	    execute() {
	        this.receiver.actionFunction("FRAC");
	    }
		
	}

    return FracFunctionCommand;

}());
