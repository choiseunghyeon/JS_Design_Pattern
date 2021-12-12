GAME.createNameSpace("GAME.model.sprite.RectangleSprite");

GAME.model.sprite.RectangleSprite = (function () {
  let AbstractSprite = GAME.model.sprite.AbstractSprite;

  class RectangleSprite extends AbstractSprite {
    constructor() {
      super();

      this.x = 0;
      this.y = 0;
      this.widht = 0;
      this.height = 0;
    }

    draw(ctx) {
      ctx.fillStyle = this.fillColor;

      ctx.fillRect(this.x, this.y, this.width, this.height);

      ctx.strokeStyle = "black";

      ctx.strokeRect(this.x, this.y, this.widht, this.height);
    }
  }

  return RectangleSprite;
})();
