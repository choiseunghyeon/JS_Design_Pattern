GAME.createNameSpace("GAME.model.sprite.AirplaneCompositeSprite");

GAME.model.sprite.AirplaneCompositeSprite = (function () {
  let AbstractCompositeSprite = GAME.model.sprite.AbstractCompositeSprite;

  class AirplaneCompositeSprite extends AbstractCompositeSprite {
    constructor() {
      super();
    }

    setX(x) {
      super.setX(x);

      let bodySprite = this.getBodySprite();
      let leftWingSprite = this.getLeftWingSprite();
      let rightWingSprite = this.getRightWingSprite();

      bodySprite.setX(x);
      leftWingSprite.setX(x - (bodySprite.getWidth() / 2 + leftWingSprite.getWidth() / 2));
      rightWingSprite.setX(x + (bodySprite.getWidth() / 2 + rightWingSprite.getWidth() / 2));
    }

    setY(y) {
      super.setY(y);

      let bodySprite = this.getBodySprite();
      let leftWingSprite = this.getLeftWingSprite();
      let rightWingSprite = this.getRightWingSprite();

      bodySprite.setY(y);
      leftWingSprite.setY(y);
      rightWingSprite.setY(y);
    }

    getBodySprite() {
      return this.sprites[0];
    }

    getLeftWingSprite() {
      return this.sprites[1];
    }
    getRightWingSprite() {
      return this.sprites[2];
    }
  }

  return AirplaneCompositeSprite;
})();
