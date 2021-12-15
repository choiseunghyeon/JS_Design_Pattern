GAME.createNameSpace("GAME.model.action.FadeOutAction");

GAME.model.action.FadeOutAction = (function () {
  let AbstractSpriteAction = GAME.model.action.AbstractSpriteAction;

  class FadeOutAction extends AbstractSpriteAction {
    constructor(duration) {
      super(duration);

      this.pivotAlpha = 0;
    }

    run(sprite, currentFrameIndex, frameDuration, time) {
      if (this.isStartFrame(currentFrameIndex)) {
        this.pivotAlpha = sprite.getAlpha();
      }

      let unitAlpha = this.pivotAlpha * time;
      let changedAlpha = this.pivotAlpha - unitAlpha;

      sprite.setAlpha(changedAlpha);
    }
  }

  return FadeOutAction;
})();
