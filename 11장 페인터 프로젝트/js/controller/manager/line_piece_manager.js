PAINTER.createNameSpace("PAINTER.controller.manager.LinePieceManager");

PAINTER.controller.manager.LinePieceManager = (function () {
  let AbstractPieceManager = PAINTER.controller.manager.AbstractPieceManager;

  class LinePieceManager extends AbstractPieceManager {
    constructor() {
      super();

      this.startX = 0;
      this.startY = 0;

      this.endX = 0;
      this.endY = 0;
    }

    setStartXY(startX, startY) {
      this.startX = startX;
      this.startY = startY;
    }

    setEndXY(endX, endY) {
      this.endX = endX;
      this.endY = endY;
    }

    isValid() {
      return this.startX !== this.endX || this.startY !== this.endY;
    }

    createPiece() {
      let LinePiece = PAINTER.model.piece.LinePiece;
      return new LinePiece(this.startX, this.startY, this.endX, this.endY);
    }

    drawing(ctx) {
      ctx.beginPath();
      ctx.moveTo(this.startX, this.startY);
      ctx.lineTo(this.endX, this.endY);
      ctx.stroke();
    }

    reset() {
      this.startX = 0;
      this.startY = 0;

      this.endX = 0;
      this.endY = 0;
    }
  }

  return LinePieceManager;
})();
