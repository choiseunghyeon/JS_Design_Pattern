CALC.createNameSpace("CALC.command.MultiplyOperationCommand");

CALC.command.MultiplyOperationCommand = (function() {
	
	let AbstractCommand = CALC.command.AbstractCommand;
	
	class MultiplyOperationCommand extends AbstractCommand {
		
		constructor(receiver) {
			super(receiver);
	    }
		
	    execute() {
	        this.receiver.actionOperator("*");
	    }
		
	}

    return MultiplyOperationCommand;

}());
