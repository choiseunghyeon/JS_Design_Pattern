CALC.createNameSpace("CALC.command.PlusMinusCommand");

CALC.command.PlusMinusCommand = (function() {
	
	let AbstractCommand = CALC.command.AbstractCommand;
	
	class PlusMinusCommand extends AbstractCommand {
		
		constructor(receiver) {
	        super(receiver);
	    }
		
		execute() {
	        this.receiver.actionPlusMinus();
	    }
		
	}

    return PlusMinusCommand;

}());
