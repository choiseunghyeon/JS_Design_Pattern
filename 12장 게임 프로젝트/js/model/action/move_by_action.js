GAME.createNameSpace("GAME.model.action.MoveByAction");

GAME.model.action.MoveByAction = (function () {
  let AbstractSpriteAction = GAME.model.action.AbstractSpriteAction;

  class MoveByAction extends AbstractSpriteAction {
    constructor(duration, byPositionX, byPositionY) {
      super(duration);

      this.byPositionX = byPositionX;
      this.byPositionY = byPositionY;

      this.fromPositionX = 0;
      this.fromPositionY = 0;
    }

    run(sprite, currentFrameIndex, frameDuration, time) {
      if (this.isStartFrame(currentFrameIndex)) {
        this.fromPositionX = sprite.getX();
        this.fromPositionY = sprite.getY();
      }

      let moveAmountX = this.byPositionX * time;
      let moveAmountY = this.byPositionY * time;

      let changedX = this.fromPositionX + moveAmountX;
      let changedY = this.fromPositionY + moveAmountY;

      sprite.setX(changedX);
      sprite.setY(changedY);
    }
  }

  return MoveByAction;
})();
