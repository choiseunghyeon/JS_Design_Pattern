PAINTER.createNameSpace("PAINTER.model.piece.FreePathPiece");

PAINTER.model.piece.FreePathPiece = (function () {
  let AbstractPiece = PAINTER.model.piece.AbstractPiece;

  class FreePathPiece extends AbstractPiece {
    constructor(points) {
      super();

      this.points = [];

      for (let point of points) {
        this.points.push({ x: point.x, y: point.y });
      }
    }

    draw(ctx) {
      this.applyStyle(ctx);

      ctx.beginPath();
      ctx.moveTo(this.points[0].x, this.points[0].y);

      for (let i = 1; i < this.points.length; i++) {
        ctx.lineTo(this.points[i].x, this.points[i].y);
      }

      ctx.stroke();
    }
  }

  return FreePathPiece;
})();
