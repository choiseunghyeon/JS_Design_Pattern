PAINTER.createNameSpace("PAINTER.controller.state.FreePathState");

PAINTER.controller.state.FreePathState = (function () {
  let ImplState = PAINTER.controller.state.ImplState;

  class FreePathState extends ImplState {
    constructor() {
      super();

      if (FreePathState._instance) {
        return FreePathState._instance;
      }

      FreePathState._instance = this;
    }

    static getInstance() {
      if (!FreePathState._instance) {
        FreePathState._instance = new FreePathState();
      }

      return FreePathState._instance;
    }

    createPieceManager() {
      return new PAINTER.controller.manager.FreePathPieceManager();
    }
  }

  return FreePathState;
})();
