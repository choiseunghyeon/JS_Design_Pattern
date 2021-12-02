PAINTER.createNameSpace("PAINTER.model.piece.RectanglePiece");

PAINTER.model.piece.RectanglePiece = (function () {
  let AbstractPiece = PAINTER.model.piece.AbstractPiece;
  class RectanglePiece extends AbstractPiece {
    constructor(x, y, width, height) {
      super();

      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }

    draw(ctx) {
      ctx.lineWidth = this.strokeWidth;
      ctx.strokeStyle = this.strokeColor;
      ctx.fillStyle = this.fillColor;

      ctx.fillRect(this.x, this.y, this.width, this.height);

      ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
  }

  return RectanglePiece;
})();
