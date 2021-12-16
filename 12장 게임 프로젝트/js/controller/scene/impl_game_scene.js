GAME.createNameSpace("GAME.controller.scene.ImplGameScene");

GAME.controller.scene.ImplGameScene = (function () {
  let IGameScene = GAME.controller.scene.IGameScene;
  class ImplGameScene extends IGameScene {
    constructor() {
      super();
    }

    finish() {}

    setup(context) {}

    getSprites() {
      return null;
    }

    update(context, frameIndex) {
      this.getSprites.forEach(sprite => sprite.update(frameIndex));
    }
  }

  return ImplGameScene;
})();
