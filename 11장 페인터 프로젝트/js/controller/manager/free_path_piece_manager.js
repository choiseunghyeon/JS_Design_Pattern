PAINTER.createNameSpace("PAINTER.controller.manager.FreePathPieceManager");

PAINTER.controller.manager.FreePathPieceManager = (function () {
  let AbstractPieceManager = PAINTER.controller.manager.AbstractPieceManager;
  let Point = PAINTER.model.struct.Point;

  class FreePathPieceManager extends AbstractPieceManager {
    constructor() {
      super();
      this.points = [];
    }

    setStartXY(startX, startY) {
      this.points.push(new Point(startX, startY));
    }

    setEndXY(endX, endY) {
      this.points.push(new Point(endX, endY));
    }

    isValid() {
      return this.points.length > 1;
    }

    createPiece() {
      let FreePathPiece = PAINTER.model.piece.FreePathPiece;

      return new FreePathPiece(this.points);
    }

    drawing(ctx) {
      ctx.beginPath();
      ctx.moveTo(this.startX, this.startY);

      for (const point of this.points) {
        ctx.lineTo(point.x, point.y);
      }

      ctx.stroke();
    }

    reset() {
      this.points = [];
    }
  }
  return FreePathPieceManager;
})();
