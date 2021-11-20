CALC.createNameSpace("CALC.command.NumberCommand");

CALC.command.NumberCommand = (function() {
	
	let AbstractCommand = CALC.command.AbstractCommand;
	
	class NumberCommand extends AbstractCommand {
		
		constructor(receiver, actionCommand) {
			super(receiver);
	        
	        this.actionCommand = actionCommand;
	    }
		
		execute() {
	        this.receiver.actionNumber(this.actionCommand);
	    }
		
	}

	return NumberCommand;

}());
