CALC.createNameSpace("CALC.command.ClearErrorCommand");

CALC.command.ClearErrorCommand = (function() {
	
	let AbstractCommand = CALC.command.AbstractCommand;
	
	class ClearErrorCommand extends AbstractCommand {
		
		constructor(receiver) {
	        super(receiver);
	    }
		
	    execute() {
	        this.receiver.actionClearError();
	    }
		
	}
    
    return ClearErrorCommand;

}());    
