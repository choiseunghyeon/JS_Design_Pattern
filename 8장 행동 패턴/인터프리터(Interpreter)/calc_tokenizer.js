import CalcToken from "./calc_token";

export default class CalcTokenizer {
  constructor(text) {
    this.keywords = ["SQRT", "FRAC", "POW", "ADD", "SUB", "MUL", "DIV"];
    this.tokenList = [];
    this.currentIndex = 0;
    let sb = "";

    let ch;
    for (let i = 0; i < text.length; i++) {
      ch = text.charAt(i);

      if (this.isDelim(ch)) {
        if (/\s/.test(ch) === false) {
          this.tokenList.push(new CalcToken(CalcToken.DELIM, "" + ch));
        }
      } else if (this.isLetter(ch)) {
        sb = "";
        sb += ch;
        for (let k = i + 1; k < text.length; k++) {
          ch = text.charAt(k);
          if (this.isDelim(ch)) {
            i = k - 1;
            break;
          }
          sb += ch;

          i = k;
        }

        let variable = sb;
        if (this.isFunction(variable)) {
        }
      }
      const element = array[i];
    }
    super(props);
  }
}
