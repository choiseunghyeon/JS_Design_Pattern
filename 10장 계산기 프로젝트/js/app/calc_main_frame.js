
CALC.createNameSpace("CALC.app.CalcMainFrame");

CALC.app.CalcMainFrame = (function() {
	
	class CalcMainFrame {
		
		constructor(calculatorDivId) {
			let calculator = document.getElementById(calculatorDivId);
			
			let equationCanvas = document.createElement("canvas");
			let displayCanvas = document.createElement("canvas");
			let stateCanvas = document.createElement("canvas");
			
			let div1 = document.createElement("div");
			let div2 = document.createElement("div");
			let div3 = document.createElement("div");
			let panel1 = document.createElement("div");
			let panel2 = document.createElement("div");
			let panel3 = document.createElement("div");
			let panel4 = document.createElement("div");
			let panel5 = document.createElement("div");
			let panel6 = document.createElement("div");
		
			div1.appendChild(equationCanvas);
			div2.appendChild(displayCanvas);
			calculator.appendChild(div1);
			calculator.appendChild(div2);
			calculator.appendChild(panel1);
			calculator.appendChild(panel2);
			calculator.appendChild(panel3);
			calculator.appendChild(panel4);
			calculator.appendChild(panel5);
			calculator.appendChild(panel6);
			div3.appendChild(stateCanvas);
			calculator.appendChild(div3);
			
			let displayView = new CALC.app.CalcDisplayView(displayCanvas);
			let equationView = new CALC.app.CalcEquationView(equationCanvas);
			let stateView = new CALC.app.CalcStateView(stateCanvas);
			
			let calcCommandReceiver = new CALC.command.CalcCommandReceiver();
			
			calcCommandReceiver.setDisplayView(displayView);
			calcCommandReceiver.setEquationView(equationView);
			calcCommandReceiver.setStateView(stateView);
			
			let fn = function() {
				let element = this;
				let actionCommand = element.textContent || element.innerText;
				
				let calcCommand = null;

				if (actionCommand === "+") {
					calcCommand = new CALC.command.AddOperationCommand(calcCommandReceiver);
				}
				else if (actionCommand === "-") {
					calcCommand = new CALC.command.SubstractOperationCommand(calcCommandReceiver);
				}
				else if (actionCommand === "*") {
					calcCommand = new CALC.command.MultiplyOperationCommand(calcCommandReceiver);
				}
				else if (actionCommand === "/") {
					calcCommand = new CALC.command.DivideOperationCommand(calcCommandReceiver);
				}
				else if (actionCommand === "=") {
					calcCommand = new CALC.command.EqualOperationCommand(calcCommandReceiver);
				}
				else if (actionCommand === "C") {
					calcCommand = new CALC.command.ClearCommand(calcCommandReceiver);
				}
				else if (actionCommand === "CE") {
					calcCommand = new CALC.command.ClearErrorCommand(calcCommandReceiver);
				}
				else if (actionCommand === "BACK") {
					calcCommand = new CALC.command.ClearBackCommand(calcCommandReceiver);
				}
				else if (actionCommand === "SQRT") {
					calcCommand = new CALC.command.SqrtFunctionCommand(calcCommandReceiver);
				}
				else if (actionCommand === "POW") {
					calcCommand = new CALC.command.PowFunctionCommand(calcCommandReceiver);
				}
				else if (actionCommand === "FRAC") {
					calcCommand = new CALC.command.FracFunctionCommand(calcCommandReceiver);
				}
				else if (actionCommand === "%") {
					calcCommand = new CALC.command.PercentFunctionCommand(calcCommandReceiver);
				}
				else if (actionCommand === "+-") {
					calcCommand = new CALC.command.PlusMinusCommand(calcCommandReceiver);
				}
				else {
					calcCommand = new CALC.command.NumberCommand(calcCommandReceiver, actionCommand);
				}

				if (calcCommand !== null) {
					calcCommand.execute();
				}

				calcCommandReceiver.updateView();
			};
			
			let inputPanel1 = new CALC.app.InputPanel();
			inputPanel1.initLayout(["%", "SQRT", "POW", "FRAC"], panel1, fn);
			
			let inputPanel2 = new CALC.app.InputPanel();
			inputPanel2.initLayout(["CE", "C", "BACK", "/"], panel2, fn);
			
			let inputPanel3 = new CALC.app.InputPanel();
			inputPanel3.initLayout(["7", "8", "9", "*"], panel3, fn);
			
			let inputPanel4 = new CALC.app.InputPanel();
			inputPanel4.initLayout(["4", "5", "6", "-"], panel4, fn);
			
			let inputPanel5 = new CALC.app.InputPanel();
			inputPanel5.initLayout(["1", "2", "3", "+"], panel5, fn);
			
			let inputPanel6 = new CALC.app.InputPanel();
			inputPanel6.initLayout(["+-", "0", ".", "="], panel6, fn);
			
			let calcModel = new CALC.model.CalcModel();

			displayView.setModel(calcModel);
			equationView.setModel(calcModel);
			stateView.setModel(calcModel);
			
			displayView.redraw();
			equationView.redraw();
			stateView.redraw();
			
			calcCommandReceiver.setModel(calcModel);
			calcCommandReceiver.changeState(CALC.state.InputState.getInstance());
		}
		
		toString() {
		    return "CalcMainFrame";
		}
		
	}
	
	return CalcMainFrame;
	
}());
