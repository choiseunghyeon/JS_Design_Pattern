CALC.createNameSpace("CALC.app.CalcConstants");

CALC.app.CalcConstants = (function() {
	
	class CalcConstants {
		
		constructor() {
		    
		}
		
		toString() {
		    return "CalcConstants";
		}
		
	}
	
	CalcConstants.VIEW_WIDTH = 200;
	CalcConstants.DEFAULT_VIEW_HEIGHT = 20;
	CalcConstants.DISPLAY_VIEW_HEIGHT = 28;
	
	CalcConstants.DEFAULT_FONT_SIZE = 13;
	CalcConstants.DEFAULT_FONT = CalcConstants.DEFAULT_FONT_SIZE + "px Arial";
	
	CalcConstants.DISPLAY_FONT_SIZE = 24;
	CalcConstants.DISPLAY_FONT = CalcConstants.DISPLAY_FONT_SIZE + "px Arial";
	
	CalcConstants.TEXT_BOTTOM_SPACING = 2;
	
	return CalcConstants;
	
}());
