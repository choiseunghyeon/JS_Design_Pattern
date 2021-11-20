CALC.createNameSpace("CALC.app.CalcEquationView");

CALC.app.CalcEquationView = (function() {
	
	class CalcEquationView {
		
		constructor(equationCanvas) {
			let CalcConstants = CALC.app.CalcConstants;
			
			this.canvas = equationCanvas;
			
			this.canvas.width = CalcConstants.VIEW_WIDTH;
			this.canvas.height = CalcConstants.DEFAULT_VIEW_HEIGHT;
			
			this.canvas.style.border = "1px solid gray";
			this.canvas.style.cursor = "pointer";
			
			this.ctx = this.canvas.getContext("2d");
			
			this.model = null;
		}
		
		redraw() {
			this.ctx.fillStyle = "white";
			this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
			
			let equationText = null;
			if (this.model !== null) {
				equationText = this.model.getDisplayEquationText();
			}
			
			if (equationText !== null && equationText.trim().length > 0) {
				this.ctx.fillStyle = "black";
				
				let CalcConstants = CALC.app.CalcConstants;
				
				this.ctx.font = CalcConstants.DEFAULT_FONT;
				
				let textWidth = this.ctx.measureText(equationText).width;
				this.ctx.fillText(equationText, this.canvas.width - textWidth, this.canvas.height - CalcConstants.TEXT_BOTTOM_SPACING);
			}
		}
		
		setModel(model) {
			this.model = model
		}
		
		toString() {
		    return "CalcEquationView";
		}
		
	}
	
	return CalcEquationView;
	
}());
