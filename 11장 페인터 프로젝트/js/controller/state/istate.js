PAINTER.createNameSpace("PAINTER.controller.state.IState");

PAINTER.controller.state.IState = (function () {
  class IState {
    constructor() {}

    press(context, mouseX, mouseY) {
      throw new Error("implement this method");
    }
    drag(context, mouseX, mouseY) {
      throw new Error("implement this method");
    }
    release(context, mouseX, mouseY) {
      throw new Error("implement this method");
    }
    drawing(context, ctx) {
      throw new Error("implement this method");
    }
  }

  return IState;
})();
