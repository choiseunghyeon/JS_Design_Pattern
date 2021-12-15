GAME.createNameSpace("GAME.model.action.AbstractSpriteAction");

GAME.model.action.AbstractSpriteAction = (function () {
  class AbstractSpriteAction {
    constructor(duration) {
      this.duration = duration;

      this.startFrameIndex = 0;
    }

    run(sprite, currentFrameIndex, frameDuration, time) {
      throw new Error("implement this method");
    }

    isUnderStartFrame(currentFrameIndex) {
      return this.startFrameIndex > currentFrameIndex;
    }
    isOverEndFrame(currentFrameIndex, totalFrameCount) {
      let diffFrameCount = currentFrameIndex - this.startFrameIndex;

      return diffFrameCount > totalFrameCount;
    }
    isStartFrame(currentFrameIndex) {
      return this.startFrameIndex == currentFrameIndex;
    }

    setStartFrameIndex(startFrameIndex, frameDuration) {
      this.startFrameIndex = startFrameIndex;
    }

    getTotalFrameCount(frameDuration) {
      return parseInt(this.getDuration() / frameDuration, 10);
    }

    getFrameIndex(currentFrameIndex) {
      return currentFrameIndex - this.startFrameIndex;
    }

    getDuration() {
      return this.duration;
    }
  }
  return AbstractSpriteAction;
})();
