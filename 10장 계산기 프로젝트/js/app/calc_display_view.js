CALC.createNameSpace("CALC.app.CalcDisplayView");

CALC.app.CalcDisplayView = (function() {
	
	class CalcDisplayView {
		
		constructor(displayCanvas) {
			let CalcConstants = CALC.app.CalcConstants;
			
			this.canvas = displayCanvas;
			
			this.canvas.width = CalcConstants.VIEW_WIDTH;
			this.canvas.height = CalcConstants.DISPLAY_VIEW_HEIGHT;
			
			this.canvas.style.border = "1px solid gray";
			this.canvas.style.cursor = "pointer";
			
			this.ctx = this.canvas.getContext("2d");
			
			this.model = null;
		}
		
		redraw() {
			this.ctx.fillStyle = "white";
			this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
			
			let displayText = null;
			if (this.model !== null) {
				displayText = this.model.getDisplayText();
			}

			if (displayText === null || displayText.trim().length <= 0) {
				displayText = "0";
			}

			this.ctx.fillStyle = "black";
			
			let CalcConstants = CALC.app.CalcConstants;
			
			this.ctx.font = CalcConstants.DISPLAY_FONT;
			
			let textWidth = this.ctx.measureText(displayText).width;
			this.ctx.fillText(displayText, this.canvas.width - textWidth, this.canvas.height - CalcConstants.TEXT_BOTTOM_SPACING);
		}
		
		setModel(model) {
			this.model = model
		}
		
		toString() {
		    return "CalcDisplayView";
		}
		
	}
	
	return CalcDisplayView;
	
}());
