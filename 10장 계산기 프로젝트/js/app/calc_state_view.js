CALC.createNameSpace("CALC.app.CalcStateView");

CALC.app.CalcStateView = (function() {
	
	class CalcStateView {
		
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
			
			let displayStateText = null;
			if (this.model !== null) {
				displayStateText = this.model.getDisplayStateText();
			}
			
			if (displayStateText !== null && displayStateText.trim().length > 0) {
				this.ctx.fillStyle = "black";
				
				let CalcConstants = CALC.app.CalcConstants;
				
				this.ctx.font = CalcConstants.DEFAULT_FONT;
				
				let textWidth = this.ctx.measureText(displayStateText).width;
				this.ctx.fillText(displayStateText, 0, this.canvas.height - CalcConstants.TEXT_BOTTOM_SPACING);
			}
		}
		
		setModel(model) {
			this.model = model
		}	
		
		toString() {
		    return "CalcStateView";
		}
		
	}
	
	return CalcStateView;
	
}());
