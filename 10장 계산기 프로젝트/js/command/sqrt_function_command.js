CALC.createNameSpace("CALC.command.SqrtFunctionCommand");

CALC.command.SqrtFunctionCommand = (function() {
	
	let AbstractCommand = CALC.command.AbstractCommand;
	
	class SqrtFunctionCommand extends AbstractCommand {
		
		constructor(receiver) {
	        super(receiver);
	    }
	    
	    execute() {
	        this.receiver.actionFunction("SQRT");
	    }
		
	}

    return SqrtFunctionCommand;

}());
