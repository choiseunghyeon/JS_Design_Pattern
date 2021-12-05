PAINTER.createNameSpace("PAINTER.controller.manager.RectanglePieceManager");

PAINTER.controller.manager.RectanglePieceManager = (function () {
  let AbstractBoundingPieceManager = PAINTER.controller.manager.AbstractBoundingPieceManager;

  class RectanglePieceManager extends AbstractBoundingPieceManager {
    constructor() {
      super();
    }

    drawing(ctx) {
      let w = this.endX - this.startX;
      let h = this.endY - this.startY;

      ctx.fillRect(this.startX, this.startY, w, h);
      ctx.strokeRect(this.startX, this.startY, w, h);
    }

    createPiece() {
      let RectanglePiece = PAINTER.model.piece.RectanglePiece;

      return new RectanglePiece(this.startX, this.startY, this.endX - this.startX, this.endY - this.startY);
    }
  }

  return RectanglePieceManager;
})();
