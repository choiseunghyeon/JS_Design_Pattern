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
  }

  return AbstractPiece;
})();
