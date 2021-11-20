CALC.createNameSpace("CALC.command.PowFunctionCommand");

CALC.command.PowFunctionCommand = (function() {
	
	let AbstractCommand = CALC.command.AbstractCommand;
	
	class PowFunctionCommand extends AbstractCommand {
		
		constructor(receiver) {
	        super(receiver);
	    }
	    
	    execute() {
	        this.receiver.actionFunction("POW");
	    }
		
	}

    return PowFunctionCommand;

}());
