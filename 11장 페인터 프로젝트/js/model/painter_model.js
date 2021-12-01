PAINTER.createNameSpace("PAINTER.model.PainterModel");

PAINTER.model.PainterModel = (function () {
  class PainterModel {
    constructor() {
      this.pieces = [];
    }

    drawPieces(ctx) {
      let RectanglePiece = PAINTER.model.piece.RectanglePiece;
      let LinePiece = PAINTER.model.piece.LinePiece;

      for (const piece of this.pieces) {
        if (piece instanceof LinePiece) {
          piece.drawLine(ctx);
        } else if (piece instanceof RectanglePiece) {
          piece.drawRect(ctx);
        }
      }
    }

    addPiece(piece) {
      this.pieces.push(piece);
    }
  }
  return PainterModel;
})();
