CALC.createNameSpace("CALC.command.EqualOperationCommand");

CALC.command.EqualOperationCommand = (function() {
	
	let AbstractCommand = CALC.command.AbstractCommand;
	
	class EqualOperationCommand extends AbstractCommand {
		
		constructor(receiver) {
			super(receiver);
	    }
		
	    execute() {
	        this.receiver.actionEqual();
	    }
		
	}

    return EqualOperationCommand;

}());
