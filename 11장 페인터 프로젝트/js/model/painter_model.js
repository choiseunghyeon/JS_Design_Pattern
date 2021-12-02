PAINTER.createNameSpace("PAINTER.model.PainterModel");

PAINTER.model.PainterModel = (function () {
  class PainterModel {
    constructor() {
      this.pieces = [];
    }

    drawPieces(ctx) {
      for (const piece of this.pieces) {
        piece.draw(ctx);
      }
    }

    addPiece(piece) {
      this.pieces.push(piece);
    }
  }
  return PainterModel;
})();
