PAINTER.createNameSpace("PAINTER.controller.state.FreePathState");

PAINTER.controller.state.FreePathState = (function () {
  let IState = PAINTER.controller.state.IState;

  class FreePathState extends IState {
    constructor() {
      super();

      if (FreePathState._instance) {
        return FreePathState._instance;
      }

      let FreePathPieceManager = PAINTER.controller.manager.FreePathPieceManager;
      this.freePathManager = new FreePathPieceManager();
      FreePathState._instance = this;
    }

    static getInstance() {
      if (!FreePathState._instance) {
        FreePathState._instance = new FreePathState();
      }

      return FreePathState._instance;
    }

    press(context, mouseX, mouseY) {
      this.freePathManager.setStartXY(mouseX, mouseY);
    }

    drag(context, mouseX, mouseY) {
      this.freePathManager.setEndXY(mouseX, mouseY);

      context.repaintView();
    }
    release(context, mouseX, mouseY) {
      this.freePathManager.setEndXY(mouseX, mouseY);
      let piece = this.freePathManager.createPiece();
      this.freePathManager.reset();

      context.addPiece(piece);
    }

    drawing(context, ctx) {
      if (this.freePathManager.isValid()) {
        this.freePathManager.drawing(ctx);
      }
    }
  }

  return FreePathState;
})();
