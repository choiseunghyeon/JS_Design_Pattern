CALC.createNameSpace("CALC.app.CalcUtil");

CALC.app.CalcUtil = (function() {
	
	class CalcUtil {
		
		constructor() {
		    
		}
		
	    static getDisplayNumber(num) {
	        let displayText = null;
	        if (num - parseInt(num) === 0) {
	            displayText = "" + parseInt(num);
	        }
	        else {
	            displayText = "" + num;
	        }
	        
	        return displayText;
	    }
	    
	    static getTextWidth(ctx, text) {
	        if (CalcUtil.isInvalidText(text)) {
	            return 0;
	        }
	        
	        let textWidth = ctx.measureText(text).width;
	        
	        return textWidth;
	    }
	    
	    static isInvalidText(text) {
	        if (text === null || text.trim().length === 0) {
	            return true;
	        }
	        
	        return false;
	    }
		
	}
	
	return CalcUtil;
	
}());
