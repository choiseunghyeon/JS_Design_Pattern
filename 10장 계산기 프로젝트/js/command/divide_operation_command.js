CALC.createNameSpace("CALC.command.DivideOperationCommand");

CALC.command.DivideOperationCommand = (function() {
	
	let AbstractCommand = CALC.command.AbstractCommand;
	
	class DivideOperationCommand extends AbstractCommand {
		
		constructor(receiver) {
			super(receiver);
	    }
		
	    execute() {
	        this.receiver.actionOperator("/");
	    }
		
	}

    return DivideOperationCommand;

}());
