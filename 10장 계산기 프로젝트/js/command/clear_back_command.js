CALC.createNameSpace("CALC.command.ClearBackCommand");

CALC.command.ClearBackCommand = (function() {
	
	let AbstractCommand = CALC.command.AbstractCommand;
	
	class ClearBackCommand extends AbstractCommand {
		
		constructor(receiver) {
	        super(receiver);
	    }
		
	    execute() {
	        this.receiver.actionClearBack();
	    }
		
	}
    
    return ClearBackCommand;

}());
