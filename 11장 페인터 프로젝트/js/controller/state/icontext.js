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
  }

  return IContext;
})();
