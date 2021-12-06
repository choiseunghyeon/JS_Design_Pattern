PAINTER.createNameSpace("PAINTER.controller.state.RectangleState");

PAINTER.controller.state.RectangleState = (function () {
  let IState = PAINTER.controller.state.IState;

  class RectangleState extends IState {
    constructor() {
      super();

      if (RectangleState._instance) {
        return RectangleState._instance;
      }

      let RectanglePieceManager = PAINTER.controller.manager.RectanglePieceManager;
      this.rectangleManager = new RectanglePieceManager();
      RectangleState._instance = this;
    }

    static getInstance() {
      if (!RectangleState._instance) {
        RectangleState._instance = new RectangleState();
      }

      return RectangleState._instance;
    }

    press(context, mouseX, mouseY) {
      this.rectangleManager.setStartXY(mouseX, mouseY);
    }

    drag(context, mouseX, mouseY) {
      this.rectangleManager.setEndXY(mouseX, mouseY);

      context.repaintView();
    }
    release(context, mouseX, mouseY) {
      this.rectangleManager.setEndXY(mouseX, mouseY);
      let piece = this.rectangleManager.createPiece();
      this.rectangleManager.reset();

      context.addPiece(piece);
    }

    drawing(context, ctx) {
      if (this.rectangleManager.isValid()) {
        this.rectangleManager.drawing(ctx);
      }
    }
  }
  return RectangleState;
})();
