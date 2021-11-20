CALC.createNameSpace("CALC.command.SubstractOperationCommand");

CALC.command.SubstractOperationCommand = (function() {
	
	let AbstractCommand = CALC.command.AbstractCommand;
	
	class SubstractOperationCommand extends AbstractCommand {
		
		constructor(receiver) {
			super(receiver);
	    }
		
	    execute() {
	        this.receiver.actionOperator("-");
	    }
		
	}

    return SubstractOperationCommand;

}());
