PAINTER.createNameSpace("PAINTER.controller.manager.AbstractPieceManager");

PAINTER.controller.manager.AbstractPieceManager = (function () {
  class AbstractPieceManager {
    setStartXY(startX, startY) {
      throw new Error("implement this method");
    }
    setEndXY(endX, endY) {
      throw new Error("implement this method");
    }
    drawing(ctx) {
      throw new Error("implement this method");
    }
    isValid() {
      throw new Error("implement this method");
    }
    createPiece() {
      throw new Error("implement this method");
    }
    reset() {
      throw new Error("implement this method");
    }
  }
  return AbstractPieceManager;
})();
