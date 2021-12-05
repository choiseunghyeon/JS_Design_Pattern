PAINTER.createNameSpace("PAINTER.model.PainterModel");

PAINTER.model.PainterModel = (function () {
  class PainterModel {
    constructor() {
      let PainterConstants = PAINTER.app.PainterConstants;
      this.pieces = [];
      this.pieceType = PainterConstants.LINE;
    }

    drawPieces(ctx) {
      for (const piece of this.pieces) {
        piece.draw(ctx);
      }
    }

    addPiece(piece) {
      this.pieces.push(piece);
    }

    getPieceType() {
      return this.pieceType;
    }

    setPieceType(pieceType) {
      this.pieceType = pieceType;
    }

    getPieces() {
      return this.pieces;
    }
  }
  return PainterModel;
})();
