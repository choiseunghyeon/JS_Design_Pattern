let text = 'ADD(2, 12)';
let calcContext = new CalcContext(text);

try {
    let result = 0
    let currentToken = calcContext.getCurrentTokenAndGoTonNext();

    let expression = 

    if (expression != null) {
        expression.parse(calcContext);
        result = expression.operate();
    }
    console.log(`${text} = ${result}`);
} catch (error) {
    console.log(error);
}

