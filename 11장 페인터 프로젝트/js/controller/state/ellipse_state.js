PAINTER.createNameSpace("PAINTER.controller.state.EllipseState");

PAINTER.controller.state.EllipseState = (function () {
  let IState = PAINTER.controller.state.IState;

  class EllipseState extends IState {
    constructor() {
      super();

      if (EllipseState._instance) {
        return EllipseState._instance;
      }

      let EllipsePieceManager = PAINTER.controller.manager.EllipsePieceManager;
      this.ellipseManager = new EllipsePieceManager();
      EllipseState._instance = this;
    }

    static getInstance() {
      if (!EllipseState._instance) {
        EllipseState._instance = new EllipseState();
      }

      return EllipseState._instance;
    }

    press(context, mouseX, mouseY) {
      this.ellipseManager.setStartXY(mouseX, mouseY);
    }

    drag(context, mouseX, mouseY) {
      this.ellipseManager.setEndXY(mouseX, mouseY);

      context.repaintView();
    }
    release(context, mouseX, mouseY) {
      this.ellipseManager.setEndXY(mouseX, mouseY);
      let piece = this.ellipseManager.createPiece();
      this.ellipseManager.reset();

      context.addPiece(piece);
    }

    drawing(context, ctx) {
      if (this.ellipseManager.isValid()) {
        this.ellipseManager.drawing(ctx);
      }
    }
  }

  return EllipseState;
})();
