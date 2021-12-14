GAME.createNameSpace("GAME.model.sprite.RectangleSprite");

GAME.model.sprite.RectangleSprite = (function () {
  let AbstractSprite = GAME.model.sprite.AbstractSprite;

  class RectangleSprite extends AbstractSprite {
    constructor() {
      super();

      this.x = 0;
      this.y = 0;
      this.width = 0;
      this.height = 0;
    }

    drawSprite(ctx) {
      let x = -1 * this.width * this.anchorX;
      let y = -1 * this.height * this.anchorY;

      ctx.fillStyle = this.fillColor;
      ctx.fillRect(x, y, this.width, this.height);

      ctx.strokeStyle = "black";
      ctx.strokeRect(x, y, this.width, this.height);
    }
  }

  return RectangleSprite;
})();
