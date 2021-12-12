GAME.createNameSpace("GAME.model.sprite.AbstractSprite");

GAME.model.sprite.AbstractSprite = (function () {
  class AbstractSprite {
    constructor() {
      this.x = 0;
      this.y = 0;

      this.width = 0;
      this.height = 0;

      this.fillColor = "blue";
    }

    draw(ctx) {
      throw new Error("implement this method");
    }

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
  }
  return AbstractSprite;
})();
