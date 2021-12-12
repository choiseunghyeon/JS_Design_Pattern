PAINTER.createNameSpace("PAINTER.controller.state.IContext");

PAINTER.controller.state.IContext = (function () {
  class IContext {
    constructor() {}

    changeState(state) {
      throw new Error("implement this method");
    }
    repaintView() {
      throw new Error("implement this method");
    }
    addPiece(piece) {
      throw new Error("implement this method");
    }
    getStrokeWidth() {
      throw new Error("implement this method");
    }
    setStrokeWidth(value) {
      throw new Error("implement this method");
    }
    getStrokeColor() {
      throw new Error("implement this method");
    }
    setStrokeColor(value) {
      throw new Error("implement this method");
    }
    getFillColor() {
      throw new Error("implement this method");
    }
    setFillColor() {
      throw new Error("implement this method");
    }
  }

  return IContext;
})();
