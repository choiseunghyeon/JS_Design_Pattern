GAME.createNameSpace("GAME.model.sprite.LabelSprite");

GAME.model.sprite.LabelSprite = (function () {
  let AbstractSprite = GAME.model.sprite.AbstractSprite;

  class LabelSprite extends AbstractSprite {
    constructor(label) {
      super();

      this.label = label;

      this.backGroundColor = "white";
      this.borderColor = "black";
    }

    drawSprite(ctx) {
      ctx.fillStyle = this.backGroundColor;
      ctx.fillRect(0, 0, this.width, this.height);

      ctx.strokeStyle = this.borderColor;
      ctx.strokeRect(0, 0, this.width, this.height);

      ctx.fillStyle = "black";

      let GameConstants = GAME.app.GameConstants;
      ctx.font = GameConstants.DEFAULT_FONT;

      let textWidth = ctx.measureText(this.label).width;
      ctx.fillText(this.label, (this.width - textWidth) / 2, this.height / 2);
    }

    getLabel() {
      return this.label;
    }

    setLabel(label) {
      this.label = label;
    }

    setBackgroundColor(backGroundColor) {
      this.backGroundColor = backGroundColor;
    }
  }

  return LabelSprite;
})();
