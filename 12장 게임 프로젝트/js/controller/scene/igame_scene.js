GAME.createNameSpace("GAME.controller.scene.IGameScene");

GAME.controller.scene.IGameScene = (function () {
  class IGameScene {
    changeScene(scene) {
      throw new Error("implement this method");
    }

    finish() {
      throw new Error("implement this method");
    }
    setup(context) {
      throw new Error("implement this method");
    }
    getSprites() {
      throw new Error("implement this method");
    }
    update() {
      throw new Error("implement this method");
    }
  }

  return IGameScene;
})();
