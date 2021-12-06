PAINTER.createNameSpace("PAINTER.controller.PainterController");

PAINTER.controller.PainterController = (function () {
  let IContext = PAINTER.controller.state.IContext;

  class PainterController extends IContext {
    constructor() {
      super();
      this.painterModel = null;
      this.painterView = null;
    }

    controlPress(mouseX, mouseY) {
      let state = this.painterModel.getState();
      state.press(this, mouseX, mouseY);
    }

    controlRelease(mouseX, mouseY) {
      let state = this.painterModel.getState();
      state.release(this, mouseX, mouseY);
    }

    controlDrag(mouseX, mouseY) {
      let state = this.painterModel.getState();
      state.drag(this, mouseX, mouseY);

      this.painterView.drawing();
    }

    drawing(ctx) {
      let state = this.painterModel.getState();
      state.drawing(this, ctx);
    }

    setPainterView(painterView) {
      this.painterView = painterView;
    }

    setPainterModel(painterModel) {
      this.painterModel = painterModel;
    }

    setState(state) {
      this.painterModel.setState(state);
    }

    changeState(state) {}

    repaintView() {
      this.painterView.repaint();
    }

    addPiece(piece) {
      this.painterModel.addPiece(piece);
    }
  }

  return PainterController;
})();
