PAINTER.createNameSpace("PAINTER.model.piece.LinePiece");

PAINTER.model.piece.LinePiece = (function () {
  let AbstractPiece = PAINTER.model.piece.AbstractPiece;
  class LinePiece extends AbstractPiece {
    constructor(startX, startY, endX, endY) {
      super();
      this.startX = startX;
      this.startY = startY;
      this.endX = endX;
      this.endY = endY;
    }

    draw(ctx) {
      ctx.lineWidth = this.strokeWidth;
      ctx.strokeStyle = this.strokeColor;

      ctx.beginPath();
      ctx.moveTo(this.startX, this.startY);
      ctx.lineTo(this.endX, this.endY);
      ctx.stroke();
    }
  }

  return LinePiece;
})();
