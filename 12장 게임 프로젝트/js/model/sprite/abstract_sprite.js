GAME.createNameSpace("GAME.model.sprite.AbstractSprite");

GAME.model.sprite.AbstractSprite = (function () {
  class AbstractSprite {
    constructor() {
      this.x = 0;
      this.y = 0;

      this.width = 0;
      this.height = 0;

      this.fillColor = "blue";

      this.alpha = 1.0;

      this.anchorX = 0.5;
      this.anchorY = 0.5;
    }

    draw(ctx) {
      ctx.save();

      ctx.globalAlpha = this.alpha;

      ctx.translate(this.x, this.y);

      this.drawSprite(ctx);

      ctx.restore();
    }

    drawSprite(ctx) {
      throw new Error("implement this method");
    }

    update(frameIndex) {}

    setFillColor(fillColor) {
      this.fillColor = fillColor;
    }

    getX() {
      return this.x;
    }

    setX(x) {
      this.x = x;
    }

    getY() {
      return this.y;
    }

    setY(y) {
      this.y = y;
    }

    getWidth() {
      return this.width;
    }
    setWidth(width) {
      this.width = width;
    }

    getHeight() {
      return this.height;
    }
    setHeight(height) {
      this.height = height;
    }

    getAlpha() {
      return this.alpha;
    }

    setAlpha(alpha) {
      this.alpha = alpha;
    }

    setAnchorX(anchorX) {
      this.anchorX = anchorX;
    }

    setAnchorY(anchorY) {
      this.anchorY = anchorY;
    }
  }
  return AbstractSprite;
})();
