CALC.createNameSpace("CALC.chain.Client");

CALC.chain.Client = (function() {
	
	let OperandHandler = CALC.chain.OperandHandler;
	let NumberOperand = CALC.operand.NumberOperand;
	let Request = CALC.chain.Request;
	let AddOperationHandler = CALC.chain.AddOperationHandler;
	let SubstractOperationHandler = CALC.chain.SubstractOperationHandler;
	let MultiplyOperationHandler = CALC.chain.MultiplyOperationHandler;
	let DivideOperationHandler = CALC.chain.DivideOperationHandler;
	let FracFunctionOperand = CALC.operand.funct.FracFunctionOperand;
	let PercentFunctionOperand = CALC.operand.funct.PercentFunctionOperand;
	let PowFunctionOperand = CALC.operand.funct.PowFunctionOperand;
	let SqrtFunctionOperand = CALC.operand.funct.SqrtFunctionOperand;
	
	class Client {
		
		constructor() {

		}

		main() {
			this.test1();
			this.test2();
			this.test3();
			this.test4();
			this.test5();
			this.test6();
			
			this.testFunction1();
			this.testFunction2();
			this.testFunction3();
			this.testFunction4();
			this.testFunction5();
			this.testFunction6();
		}

		test1() {
			let handlerList = [];

			let operandHandler = new OperandHandler(new NumberOperand("12"));

			handlerList.push(operandHandler);

			let handler = null;
			let nextHandler = null;
			let i = 0;
			let handlerListSize = handlerList.length;
			
			while (i < handlerListSize - 1) {
				handler = handlerList[i];
				nextHandler = handlerList[i + 1];

				handler.setNext(nextHandler);

				i += 1;
			}

			let request = new Request();
			operandHandler.makeEquation(request);

			console.log("request.getEquation() = " + request.getEquation());

			request = new Request();
			operandHandler.handleRequest(request);

			console.log("request.getResult() = " + request.getResult());
		}

		test2() {
			let handlerList = [];

			let operandHandler = new OperandHandler(new NumberOperand("12"));
			let addOperationHandler = new AddOperationHandler(new NumberOperand("10"));

			handlerList.push(operandHandler);
			handlerList.push(addOperationHandler);

			let handler = null;
			let nextHandler = null;
			let i = 0;
			let handlerListSize = handlerList.length;
			while (i < handlerListSize - 1) {
				handler = handlerList[i];
				nextHandler = handlerList[i + 1];

				handler.setNext(nextHandler);

				i += 1;
			}

			let request = new Request();
			operandHandler.makeEquation(request);

			console.log("request.getEquation() = " + request.getEquation());

			request = new Request();
			operandHandler.handleRequest(request);

			console.log("request.getResult() = " + request.getResult());
		}

		test3() {
			let handlerList = [];

			let operandHandler = new OperandHandler(new NumberOperand("12"));
			let substractOperationHandler = new SubstractOperationHandler(new NumberOperand("2"));

			handlerList.push(operandHandler);
			handlerList.push(substractOperationHandler);

			let handler = null;
			let nextHandler = null;
			let i = 0;
			let handlerListSize = handlerList.length;
			while (i < handlerListSize - 1) {
				handler = handlerList[i];
				nextHandler = handlerList[i + 1];

				handler.setNext(nextHandler);

				i += 1;
			}

			let request = new Request();
			operandHandler.makeEquation(request);

			console.log("request.getEquation() = " + request.getEquation());

			request = new Request();
			operandHandler.handleRequest(request);

			console.log("request.getResult() = " + request.getResult());
		}

		test4() {
			let handlerList = [];

			let operandHandler = new OperandHandler(new NumberOperand("12"));
			let multiplyOperationHandler = new MultiplyOperationHandler(new NumberOperand("5"));

			handlerList.push(operandHandler);
			handlerList.push(multiplyOperationHandler);

			let handler = null;
			let nextHandler = null;
			let i = 0
			let handlerListSize = handlerList.length;
			while (i < handlerListSize - 1) {
				handler = handlerList[i];
				nextHandler = handlerList[i + 1];

				handler.setNext(nextHandler);

				i += 1;
			}

			let request = new Request();
			operandHandler.makeEquation(request);

			console.log("request.getEquation() = " + request.getEquation());

			request = new Request();
			operandHandler.handleRequest(request);

			console.log("request.getResult() = " + request.getResult());
		}

		test5() {
			let handlerList = [];

			let operandHandler = new OperandHandler(new NumberOperand("12"));
			let divideOperationHandler = new DivideOperationHandler(new NumberOperand("3"));

			handlerList.push(operandHandler);
			handlerList.push(divideOperationHandler);

			let handler = null;
			let nextHandler = null;
			let i = 0;
			let handlerListSize = handlerList.length;
			while (i < handlerListSize - 1) {
				handler = handlerList[i];
				nextHandler = handlerList[i + 1];

				handler.setNext(nextHandler);

				i += 1;
			}

			let request = new Request();
			operandHandler.makeEquation(request);

			console.log("request.getEquation() = " + request.getEquation());

			request = new Request();
			operandHandler.handleRequest(request);

			console.log("request.getResult() = " + request.getResult());
		}

		test6() {
			let handlerList = [];

			let operandHandler = new OperandHandler(new NumberOperand("12"));

			let addOperationHandler = new AddOperationHandler(new NumberOperand("10"));
			let substractOperationHandler = new SubstractOperationHandler(new NumberOperand("2"));
			let multiplyOperationHandler = new MultiplyOperationHandler(new NumberOperand("5"));
			let divideOperationHandler = new DivideOperationHandler(new NumberOperand("3"));

			handlerList.push(operandHandler);

			handlerList.push(addOperationHandler);
			handlerList.push(substractOperationHandler);
			handlerList.push(multiplyOperationHandler);
			handlerList.push(divideOperationHandler);

			let handler = null;
			let nextHandler = null;
			let i = 0;
			let handlerListSize = handlerList.length;
			while (i < handlerListSize - 1) {
				handler = handlerList[i];
				nextHandler = handlerList[i + 1];

				handler.setNext(nextHandler);

				i += 1;
			}

			let request = new Request();
			operandHandler.makeEquation(request);

			console.log("request.getEquation() = " + request.getEquation());

			request = new Request();
			operandHandler.handleRequest(request);

			console.log("request.getResult() = " + request.getResult());
		}
		
	    testFunction1() {
	        let handlerList = [];
	        
	        let operandHandler = new OperandHandler(new FracFunctionOperand(new NumberOperand("10")));
	        
	        handlerList.push(operandHandler);
	        
	        let handler = null;
	        let nextHandler = null;
	        let i = 0;
	        let handlerListSize = handlerList.length;
	        while (i < handlerListSize - 1) {
	            handler = handlerList[i];
	            nextHandler = handlerList[i + 1];
	            
	            handler.setNext(nextHandler);
	            
	            i += 1;
	        }
	        
	        let request = new Request();
	        operandHandler.makeEquation(request);
	        
	        console.log("request.getEquation() = " + request.getEquation());         

	        request = new Request();
	        operandHandler.handleRequest(request);
	        
	        console.log("request.getResult() = " + String(request.getResult()));
	    }
	        
	    testFunction2() {
	    	let handlerList = [];
	        
	    	let percentFunctionOperand = new PercentFunctionOperand(new NumberOperand("10"));
	        percentFunctionOperand.setPercent(0.5);
	        
	        let operandHandler = new OperandHandler(percentFunctionOperand);
	        
	        handlerList.push(operandHandler);
	        
	        let handler = null;
	        let nextHandler = null;
	        let i = 0;
	        let handlerListSize = handlerList.length;
	        while (i < handlerListSize - 1) {
	            handler = handlerList[i];
	            nextHandler = handlerList[i + 1];
	            
	            handler.setNext(nextHandler);
	            
	            i += 1;
	        }
	        
	        let request = new Request();
	        operandHandler.makeEquation(request);
	        
	        console.log("request.getEquation() = " + request.getEquation());             

	        request = new Request();
	        operandHandler.handleRequest(request);
	        
	        console.log("request.getResult() = " + String(request.getResult()));
	    }
	    
	    testFunction3() {
	    	let handlerList = [];
	        
	    	let operandHandler = new OperandHandler(new PowFunctionOperand(new NumberOperand("10")));
	        
	        handlerList.push(operandHandler);
	        
	        let handler = null;
	        let nextHandler = null;
	        let i = 0;
	        let handlerListSize = handlerList.length;
	        while (i < handlerListSize - 1) {
	            handler = handlerList[i];
	            nextHandler = handlerList[i + 1];
	            
	            handler.setNext(nextHandler);
	            
	            i += 1;
	        }
	        
	        let request = new Request();
	        operandHandler.makeEquation(request);
	        
	        console.log("request.getEquation() = " + request.getEquation());             

	        request = new Request();
	        operandHandler.handleRequest(request);
	        
	        console.log("request.getResult() = " + String(request.getResult()));
	    }
	    
	    testFunction4() {
	    	let handlerList = [];
	        
	    	let operandHandler = new OperandHandler(new SqrtFunctionOperand(new NumberOperand("10")));
	        
	        handlerList.push(operandHandler);
	        
	        let handler = null;
	        let nextHandler = null;
	        let i = 0;
	        let handlerListSize = handlerList.length;
	        while (i < handlerListSize - 1) {
	            handler = handlerList[i];
	            nextHandler = handlerList[i + 1];
	            
	            handler.setNext(nextHandler);
	            
	            i += 1;
	        }
	        
	        let request = new Request();
	        operandHandler.makeEquation(request);
	        
	        console.log("request.getEquation() = " + request.getEquation());             

	        request = new Request();
	        operandHandler.handleRequest(request);
	        
	        console.log("request.getResult() = " + String(request.getResult()));
	    }
	    
	    testFunction5() {
	    	let handlerList = [];
	        
	    	let operandHandler = new OperandHandler(new NumberOperand("12"));
	    	let addOperationHandler = new AddOperationHandler(new FracFunctionOperand(new NumberOperand("10")));
	        
	        handlerList.push(operandHandler);
	        handlerList.push(addOperationHandler);
	        
	        let handler = null;
	        let nextHandler = null;
	        let i = 0;
	        let handlerListSize = handlerList.length;
	        while (i < handlerListSize - 1) {
	            handler = handlerList[i];
	            nextHandler = handlerList[i + 1];
	            
	            handler.setNext(nextHandler);
	            
	            i += 1;
	        }
	        
	        let request = new Request();
	        operandHandler.makeEquation(request);
	        
	        console.log("request.getEquation() = " + request.getEquation());         

	        request = new Request();
	        operandHandler.handleRequest(request);
	        
	        console.log("request.getResult() = " + String(request.getResult()));
	    }
	    
	    testFunction6() {
	    	let handlerList = [];
	        
	    	let operandHandler = new OperandHandler(new NumberOperand("12"));
	        
	    	let addOperationHandler = new AddOperationHandler(new PowFunctionOperand(new FracFunctionOperand(new NumberOperand("10"))));
	        
	        handlerList.push(operandHandler);
	        handlerList.push(addOperationHandler);
	        
	        let handler = null;
	        let nextHandler = null;
	        let i = 0;
	        let handlerListSize = handlerList.length;
	        while (i < handlerListSize - 1) {
	            handler = handlerList[i];
	            nextHandler = handlerList[i + 1];
	            
	            handler.setNext(nextHandler);
	            
	            i += 1;
	        }
	        
	        let request = new Request();
	        operandHandler.makeEquation(request);
	        
	        console.log("request.getEquation() = " + request.getEquation());             

	        request = new Request();
	        operandHandler.handleRequest(request);
	        
	        console.log("request.getResult() = " + String(request.getResult()));
	    }
		
	}
	
	return Client;

}());
