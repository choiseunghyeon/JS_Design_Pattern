PAINTER.createNameSpace("PAINTER.controller.manager.AbstractBoundingPieceManager");

PAINTER.controller.manager.AbstractBoundingPieceManager = (function () {
  let AbstractPieceManager = PAINTER.controller.manager.AbstractPieceManager;

  class AbstractBoundingPieceManager extends AbstractPieceManager {
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

    reset() {
      this.startX = 0;
      this.startY = 0;

      this.endX = 0;
      this.endY = 0;
    }
  }

  return AbstractBoundingPieceManager;
})();
