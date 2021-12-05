PAINTER.createNameSpace("PAINTER.controller.PainterController");

PAINTER.controller.PainterController = (function () {
  class PainterController {
    constructor() {
      this.painterModel = null;
      this.painterView = null;
    }

    controlPress(mouseX, mouseY) {
      let pieceManager = this.painterModel.getPieceManager();
      pieceManager.setStartXY(mouseX, mouseY);
    }

    controlRelease(mouseX, mouseY) {
      let pieceManager = this.painterModel.getPieceManager();
      pieceManager.setEndXY(mouseX, mouseY);
      let piece = pieceManager.createPiece();
      pieceManager.reset();

      this.painterModel.addPiece(piece);
    }

    controlDrag(mouseX, mouseY) {
      let pieceManager = this.painterModel.getPieceManager();
      pieceManager.setEndXY(mouseX, mouseY);

      this.painterView.drawing();
    }

    drawing(ctx) {
      let pieceManager = this.painterModel.getPieceManager();
      if (pieceManager !== null) {
        if (pieceManager.isValid()) {
          pieceManager.drawing(ctx);
        }
      }
    }

    setPainterView(painterView) {
      this.painterView = painterView;
    }

    setPainterModel(painterModel) {
      this.painterModel = painterModel;
    }

    setPieceManager(pieceManager) {
      this.painterModel.setPieceManager(pieceManager);
    }
  }

  return PainterController;
})();
