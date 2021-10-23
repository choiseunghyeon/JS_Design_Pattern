export default class CalcContext {
  constructor(text) {
    this.tokenizer = new CalcTokenizer(text);
    this.currentToken = null;
  }

  getCurerntTokenAndGoToNext() {
    if (this.tokenizer.hasMoreElements()) {
      this.currentToken = this.tokenizer.getCurerntTokenAndGoToNext();
    } else {
      this.currentToken = null;
    }

    return this.currentToken;
  }

  skipToken(token) {
    if (token !== this.currentToken.getToken()) {
      throw new Error(`Warning ${token} is expected, but ${this.currentToken} is found`);
    }
  }

  print() {
    this.tokenizer.print();
  }

  getCurerntToken() {
    return this.tokenizer.getCurerntToken();
  }
}
