CALC.createNameSpace("CALC.command.PercentFunctionCommand");

CALC.command.PercentFunctionCommand = (function() {
	
	let AbstractCommand = CALC.command.AbstractCommand;
	
	class PercentFunctionCommand extends AbstractCommand {
		
		constructor(receiver) {
	        super(receiver);
	    }
	    
	    execute() {
	        this.receiver.actionFunction("%");
	    }
		
	}

    return PercentFunctionCommand;

}());
