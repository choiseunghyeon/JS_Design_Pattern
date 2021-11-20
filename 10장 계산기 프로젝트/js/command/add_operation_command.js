CALC.createNameSpace("CALC.command.AddOperationCommand");

CALC.command.AddOperationCommand = (function() {
	
	let AbstractCommand = CALC.command.AbstractCommand;
	
	class AddOperationCommand extends AbstractCommand {
		
		constructor(receiver) {
			super(receiver);
	    }
	    
	    execute() {
	        this.receiver.actionOperator("+");
	    }
		
	}

    return AddOperationCommand;

}());
