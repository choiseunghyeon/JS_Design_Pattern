class Client {
    constructor() {}

    seupTextStyleFlyweightFactory() {
        let textStyleFlyweightFactory = TextStyleFlyweightFactory.getInstance();

        let name = FlyweightConstants.NUMBER_STYLE_NAME;
        let textStyle = new TextStyleFlyWeight(FlyweightConstants.DEFAULT_NUMBER_FONT_INFO, 'red');
        textStyleFlyweightFactory.putTextStyleFlyweight(name, textStyle);

        name = FlyweightConstants.ANSWER_STYLE_NAME;
        let textStyle = new TextStyleFlyWeight(FlyweightConstants.DEFAULT_ANSWER_FONT_INFO, 'black');
        textStyleFlyweightFactory.putTextStyleFlyweight(name, textStyle);
    }
}

class TextStyleFlyWeight {
    constructor(fontInfo, color) {
        this.fontInfo = fontInfo;
        this.color = color;
    }
    getColor () {
        return this.color;
    }
}

class TextStyleFlyweightFactory {
    constructor() {
        if(TextStyleFlyweightFactory._instance) {
            return TextStyleFlyweightFactory._instance;
        }

        TextStyleFlyweightFactory._instance = this;

        this.pool = new Map();
    }

    static getInstance() {
        if(!TextStyleFlyweightFactory._instance) {
            TextStyleFlyweightFactory._instance = new TextStyleFlyweightFactory();
        }

        return TextStyleFlyweightFactory._instance;
    }

    getTextStyleFlyweight(name) {
        let textStyle = this.pool.get(name);
        return textStyle;
    }

    putTextStyleFlyweight(name, textStyle) {
        this.pool.set(name, textStyle);
    }
}

class FlyweightConstants {
    constructor(){}

    static NUMBER_STYLE_NAME = 'number';
    static ANSWER_STYLE_NAME = 'answer';

    static COLUMN_WIDTH = 50;
    static ROW_HEIGHT = 50;

    static OPERATORS = ["+", "-", "*", "/"]
    static EQUAL_CHAR = "="
    static DEFAULT_NUMBER_FONT_INFO = new FontInfo("Times", 18);
    static DEFAULT_ANSWER_FONT_INFO = new FontInfo("Times", 26);
}

class FontInfo {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }

    getName(){
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getSize() {
        return this.size
    }

    setSize(size) {
        this.size = size;
    }
}

class PrintAnswer {
    constructor(){
        this.textStyleFlyweightFactory = TextStyleFlyweightFactory.getInstance();
        this.firstNumber = 0;
        this.secondNumber = 0;
    }

    printResult() {
        let answers = [0, 0, 0, 0];

        answers[0] = this.firstNumber + this.secondNumber
        answers[1] = this.firstNumber - this.secondNumber
        answers[2] = this.firstNumber * this.secondNumber
        answers[3] = this.firstNumber / this.secondNumber

        answers.forEach((answer, index) => {
            let operator = FlyweightConstants.OPERATORS[index];
            let textArray = ['', '','',''];
            textArray[0] = `${this.firstNumber} ${this.getTextStyle(FlyweightConstants.NUMBER_STYLE_NAME)}`;
            textArray[1] = operator;
            textArray[2] = `${this.secondNumber} ${this.getTextStyle(FlyweightConstants.NUMBER_STYLE_NAME)}`;
            textArray[3] = FlyweightConstants.EQUAL_CHAR;
            textArray[4] = `${answer} ${this.getTextStyle(FlyweightConstants.ANSWER_STYLE_NAME)}`;

            console.log(textArray[0],textArray[1],textArray[2],textArray[3],textArray[4]);
        })
    }

    getTextStyle(name) {
        return this.textStyleFlyweightFactory.getTextStyleFlyweight(name);)
    }
    setFirstNumber(firstNumber) {
        this.firstNumber = firstNumber;
    }

    setSecondNumber(secondNumber) {
        this.secondNumber = secondNumber;
    }
}
function main() {

    let client = new Client();
    
    client.seupTextStyleFlyweightFactory();
    
    let printAnswer = new PrintAnswer();
    
    printAnswer.setFirstNumber(10);
    printAnswer.setSecondNumber(20);
    
    printAnswer.printResult();
}
