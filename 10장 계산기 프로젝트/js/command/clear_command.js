CALC.createNameSpace("CALC.command.ClearCommand");

CALC.command.ClearCommand = (function() {
	
	let AbstractCommand = CALC.command.AbstractCommand;
	
	class ClearCommand extends AbstractCommand {
		
		constructor(receiver) {
	        super(receiver);
	    }
		
	    execute() {
	        this.receiver.actionClear();
	    }
		
	}

    return ClearCommand;

}());
