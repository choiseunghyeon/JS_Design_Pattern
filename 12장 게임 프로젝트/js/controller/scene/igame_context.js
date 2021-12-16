GAME.createNameSpace("GAME.controller.scene.IGameContext");

GAME.controller.scene.IGameContext = (function () {
  class IGameContext {
    changeScene(scene) {
      throw new Error("implement this method");
    }

    repaintView() {
      throw new Error("implement this method");
    }
    getScreenWidth() {
      throw new Error("implement this method");
    }
    getScreenHeight() {
      throw new Error("implement this method");
    }
    getCurrentFrameIndex() {
      throw new Error("implement this method");
    }
    getFrameDuration() {
      throw new Error("implement this method");
    }
  }

  return IGameContext;
})();
