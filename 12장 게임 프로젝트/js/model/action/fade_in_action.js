GAME.createNameSpace("GAME.model.action.FadeInAction");

GAME.model.action.FadeInAction = (function () {
  let AbstractSpriteAction = GAME.model.action.AbstractSpriteAction;

  class FadeInAction extends AbstractSpriteAction {
    constructor(duration) {
      super(duration);

      this.pivotAlpha = 0;
    }

    run(sprite, currentFrameIndex, frameDuration, time) {
      if (this.isStartFrame(currentFrameIndex)) {
        this.pivotAlpha = sprite.getAlpha();
      }

      let unitAlpha = this.pivotAlpha * time;
      let changedAlpha = unitAlpha;

      sprite.setAlpha(changedAlpha);
    }
  }

  return FadeInAction;
})();
