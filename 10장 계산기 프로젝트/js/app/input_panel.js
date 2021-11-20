CALC.createNameSpace("CALC.app.InputPanel");

CALC.app.InputPanel = (function() {
	
	class InputPanel {
		
		constructor() {
		    
		}
		
		initLayout(labels, panel, fn) {
			for(let label of labels) {
				let btn = this.createButton(label);
				panel.appendChild(btn);
				
				btn.addEventListener("click", fn, false);
			}
		}
		
		createButton(label) {
			let button = document.createElement("button");
		    let text = document.createTextNode(label);
		    
		    button.style.width= "50px";
		    
		    button.appendChild(text);
		    
			return button;
		}
		
		toString() {
		    return "InputPanel";
		}
		
	}
	
	return InputPanel;
	
}());
