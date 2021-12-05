PAINTER.createNameSpace("PAINTER.controller.manager.EllipsePieceManager");

PAINTER.controller.manager.EllipsePieceManager = (function () {
  let AbstractBoundingPieceManager = PAINTER.controller.manager.AbstractBoundingPieceManager;
  class EllipsePieceManager extends AbstractBoundingPieceManager {
    constructor() {
      super();
    }

    drawing(ctx) {
      let EllipsePiece = PAINTER.model.piece.EllipsePiece;

      let w = this.endX - this.startX;
      let h = this.endY - this.startY;

      EllipsePiece.drawEllipseByBezierCurve(ctx, this.startX, this.startY, w, h);
    }

    createPiece() {
      let EllipsePiece = PAINTER.model.piece.EllipsePiece;
      return new EllipsePiece(this.startX, this.startY, this.endX - this.startX, this.endY - this.startY);
    }
  }

  return EllipsePieceManager;
})();
