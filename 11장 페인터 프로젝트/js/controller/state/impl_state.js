PAINTER.createNameSpace("PAINTER.controller.state.ImplState");

PAINTER.controller.state.ImplState = (function () {
  let IState = PAINTER.controller.state.IState;

  class ImplState extends IState {
    constructor() {
      super();

      this.pieceManager = this.createPieceManager();
    }

    createPieceManager() {
      throw new Error("implement this method");
    }

    press(context, mouseX, mouseY) {
      this.pieceManager.setStartXY(mouseX, mouseY);
    }

    drag(context, mouseX, mouseY) {
      this.pieceManager.setEndXY(mouseX, mouseY);

      context.repaintView();
    }
    release(context, mouseX, mouseY) {
      this.pieceManager.setEndXY(mouseX, mouseY);
      let piece = this.pieceManager.createPiece();
      this.pieceManager.reset();

      context.addPiece(piece);
    }

    drawing(context, ctx) {
      if (this.pieceManager.isValid()) {
        this.pieceManager.drawing(ctx);
      }
    }
  }
  return ImplState;
})();
