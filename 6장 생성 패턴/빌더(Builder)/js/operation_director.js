CALC.createNameSpace("CALC.builder.OperationBuilder");

CALC.builder.OperationBuilder = (function () {
  class OperationBuilder {
    constructor(builder) {
      this.builder = builder;
    }

    construct() {
      this.builder.buildFirstNumber();
      this.builder.buildOperator();
      this.builder.buildSecondNumber();
      this.builder.buildAnswer();

      let result = this.builder.getResult();

      console.log(result);
    }
  }

  return OperationBuilder;
})();
