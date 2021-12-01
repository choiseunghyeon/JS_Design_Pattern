PAINTER.createNameSpace("PAINTER.model.piece.LinePiece");

PAINTER.model.piece.LinePiece = (function () {
  class LinePiece {
    constructor(startX, startY, endX, endY) {
      this.strokeColor = "green";
      this.strokeWidth = 10;

      this.startX = startX;
      this.startY = startY;
      this.endX = endX;
      this.endY = endY;
    }

    drawLine(ctx) {
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
