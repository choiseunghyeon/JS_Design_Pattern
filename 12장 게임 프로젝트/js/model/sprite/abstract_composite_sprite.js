GAME.createNameSpace("GAME.model.sprite.AbstractCompositeSprite");

GAME.model.sprite.AbstractCompositeSprite = (function () {
  let AbstractSprite = GAME.model.sprite.AbstractSprite;
  class AbstractCompositeSprite extends AbstractSprite {
    constructor() {
      super();

      this.sprites = [];
    }

    addSprite(sprite) {
      this.sprites.push(sprite);
    }

    draw(ctx) {
      this.sprites.forEach(sprite => sprite.draw(ctx));
    }

    setAlpha(alpha) {
      this.sprites.forEach(sprite => sprite.setAlpha(alpha));
    }

    drawSprite(ctx) {}

    getHeight() {
      let minY = Number.MAX_VALUE;
      let maxY = 0;

      let y = 0;
      let height = 0;

      this.sprites.forEach(sprite => {
        y = sprite.getY();
        height = sprite.getHeight();

        if (minY > y) {
          minY = y;
        }

        if (maxY < y + height) {
          maxY = y + height;
        }
      });

      return maxY - minY;
    }

    getWidth() {
      let minY = Number.MAX_VALUE;
      let maxY = 0;

      let x = 0;
      let width = 0;

      this.sprites.forEach(sprite => {
        x = sprite.getX();
        width = sprite.getWidth();

        if (minY > x) {
          minY = x;
        }

        if (maxY < x + width) {
          maxY = x + width;
        }
      });

      return maxY - minY;
    }
  }

  return AbstractCompositeSprite;
})();
