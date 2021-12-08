PAINTER.createNameSpace("PAINTER.controller.state.EllipseState");

PAINTER.controller.state.EllipseState = (function () {
  let ImplState = PAINTER.controller.state.ImplState;

  class EllipseState extends ImplState {
    constructor() {
      super();

      if (EllipseState._instance) {
        return EllipseState._instance;
      }

      EllipseState._instance = this;
    }

    static getInstance() {
      if (!EllipseState._instance) {
        EllipseState._instance = new EllipseState();
      }

      return EllipseState._instance;
    }

    createPieceManager() {
      return new PAINTER.controller.manager.EllipsePieceManager();
    }
  }

  return EllipseState;
})();
