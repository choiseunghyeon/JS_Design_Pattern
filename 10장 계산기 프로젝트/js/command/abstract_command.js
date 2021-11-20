CALC.createNameSpace("CALC.command.AbstractCommand");

CALC.command.AbstractCommand = (function() {
	
	class AbstractCommand {
		
		constructor(receiver) {
	        this.receiver = receiver;
	    }
	    
	    execute() {
	    	throw new Error("You have to implement the method doSomething!");
	    }
		
	}

    return AbstractCommand;

}());
