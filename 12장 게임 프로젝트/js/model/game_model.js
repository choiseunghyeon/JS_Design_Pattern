GAME.createNameSpace("GAME.model.GameModel");

GAME.model.GameModel = (function () {
  class GameModel {
    constructor() {
      this.frameIndex = 0;

      this.framePerSecond = 10;

      this.scene = null;
    }

    getFrameDuration() {
      return 1.0 / this.framePerSecond;
    }

    getFrameIndex() {
      return this.frameIndex;
    }

    getFramePerSecond() {
      return this.framePerSecond;
    }

    increaseFrameIndex() {
      this.frameIndex++;
    }

    setFrameIndex(frameIndex) {
      this.frameIndex = frameIndex;
    }

    setFramePerSecond(framePerSecond) {
      this.framePerSecond = framePerSecond;
    }

    updateScene(context) {
      this.updateScene.update(context, this.frameIndex);
    }

    changeScene(scene, context) {
      if (this.scene !== null) {
        this.scene.finish();
      }

      if (scene !== null) {
        scene.setup(context);
      }

      this.scene = scene;
    }

    getScene() {
      return this.scene;
    }

    getSprites() {
      if (this.scene === null) {
        return null;
      }

      let sprites = this.scene.getSprites();

      return sprites;
    }

    runSprites() {
      let sprites = this.getSprites();

      let frameDuration = this.getFrameDuration();

      sprites.forEach(sprite => sprite.run(this.frameIndex, frameDuration));
    }
  }

  return GameModel;
})();
