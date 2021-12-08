PAINTER.createNameSpace("PAINTER.controller.state.RectangleState");

PAINTER.controller.state.RectangleState = (function () {
  let ImplState = PAINTER.controller.state.ImplState;

  class RectangleState extends ImplState {
    constructor() {
      super();

      if (RectangleState._instance) {
        return RectangleState._instance;
      }

      RectangleState._instance = this;
    }

    static getInstance() {
      if (!RectangleState._instance) {
        RectangleState._instance = new RectangleState();
      }

      return RectangleState._instance;
    }

    createPieceManager() {
      return new PAINTER.controller.manager.RectanglePieceManager();
    }
  }
  return RectangleState;
})();
