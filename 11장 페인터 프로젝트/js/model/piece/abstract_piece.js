PAINTER.createNameSpace("PAINTER.model.piece.AbstractPiece");

PAINTER.model.piece.AbstractPiece = (function () {
  class AbstractPiece {
    constructor() {
      this.strokeColor = "red";
      this.strokeWidth = 10;

      this.fillColor = "blue";
    }

    draw(ctx) {
      throw new Error("implement this method");
    }

    setStrokeColor(strokeColor) {
      this.strokeColor = strokeColor;
    }

    setStrokeWidth(strokeWidth) {
      this.strokeWidth = strokeWidth;
    }

    setFillColor(fillColor) {
      this.fillColor = fillColor;
    }

    applyStyle(ctx) {
      ctx.lineWidth = this.strokeWidth;
      ctx.strokeStyle = this.strokeColor;
      ctx.fillStyle = this.fillColor;
    }
  }

  return AbstractPiece;
})();
