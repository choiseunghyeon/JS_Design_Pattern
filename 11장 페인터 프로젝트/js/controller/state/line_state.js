PAINTER.createNameSpace("PAINTER.controller.state.LineState");

PAINTER.controller.state.LineState = (function () {
  let ImplState = PAINTER.controller.state.ImplState;

  class LineState extends ImplState {
    constructor() {
      super();

      if (LineState._instance) {
        return LineState._instance;
      }
      LineState._instance = this;
    }

    static getInstance() {
      if (!LineState._instance) {
        LineState._instance = new LineState();
      }

      return LineState._instance;
    }

    createPieceManager() {
      return new PAINTER.controller.manager.LinePieceManager();
    }
  }

  return LineState;
})();
