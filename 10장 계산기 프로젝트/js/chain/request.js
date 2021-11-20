CALC.createNameSpace("CALC.chain.Request");

CALC.chain.Request = (function() {
	
	class Request {
		
		constructor() {
			this.result = null;

			this.sbEquation = "";
		}

		getResult() {
			return this.result;
		}

		setResult(result) {
			this.result = result;
		}

		appendEquation(desc) {
			this.sbEquation += desc;
		}

		getEquation() {
			return this.sbEquation;
		}
		
	}

	return Request;

}());
