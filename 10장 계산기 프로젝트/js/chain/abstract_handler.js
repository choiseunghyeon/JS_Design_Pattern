CALC.createNameSpace("CALC.chain.AbstractHandler");

CALC.chain.AbstractHandler = (function() {
	
	class AbstractHandler {
		
		constructor(operand) {
			this.operand = operand;
			this.next = null;
		}

		setNext(next) {
			this.next = next;
			return this.next;
		}

		handleRequest(request) {
			if (this.hasOperand()) {
				if (this.next !== null) {
					let result = this.operate(request);
					request.setResult(result);

					this.next.handleRequest(request);
				}
				else {
					let result = this.operate(request);
					request.setResult(result);
				}
			}
		}

		makeEquation(request) {
			if (this.next !== null) {
				let desc = this.getEquation(request);
				request.appendEquation(desc);

				this.next.makeEquation(request);
			}
			else {
				let desc = this.getEquation(request);
				request.appendEquation(desc);
			}
		}

		getOperandValue() {
			return this.operand.getValue();
		}

		getOperandDesc() {
			if (this.hasOperand()) {
				return this.operand.getDesc();
			} else {
				return ""
			}
		}

		operate(request) {
			throw new Error("You have to implement the method doSomething!");
		}

		getEquation(request) {
			throw new Error("You have to implement the method doSomething!");
		}

		hasOperand() {
			if (this.operand !== null) {
				return true
			}

			return false
		}

		isOperation() {
			return false
		}

		getOperand() {
			return this.operand
		}

		setOperand(operand) {
			this.operand = operand
		}
		
	}

	return AbstractHandler;

}());
