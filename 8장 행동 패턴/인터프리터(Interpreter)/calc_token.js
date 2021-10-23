export default class CalcToken {
  static FUNCTION = Symbol("function");
  static NUMBER = Symbol("number");
  static DELIM = Symbol("delimiter");
  static VARIABLE = Symbol("variable");

  constructor(type, token) {
    this.type = type;
    this.token = token;
  }

  getType() {
    return this.type;
  }

  getToken() {
    return this.token;
  }

  getTypeDescription(type) {
    switch (type) {
      case CalcToken.FUNCTION:
        return "FUNCTION";
      case CalcToken.NUMBER:
        return "NUMBER";
      case CalcToken.DELIM:
        return "DELIM";
      case CalcToken.VARIABLE:
        return "VARIABLE";
      default:
        break;
    }

    return null;
  }
}
