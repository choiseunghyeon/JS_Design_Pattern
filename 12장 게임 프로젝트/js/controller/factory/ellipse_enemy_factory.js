GAME.createNameSpace("GAME.controller.factory.EllipseEnemyFactory");

GAME.controller.factory.EllipseEnemyFactory = (function () {
  let AbstractEnemyFactory = GAME.controller.factory.AbstractEnemyFactory;
  class EllipseEnemyFactory extends AbstractEnemyFactory {
    constructor() {
      super();
    }

    createBody(width, height) {
      let shapeSprite = new GAME.model.sprite.EllipseSprite();

      shapeSprite.setAnchorX(0.5);
      shapeSprite.setAnchorY(0.5);

      shapeSprite.setWidth(width);
      shapeSprite.setHeight(height);

      return shapeSprite;
    }
    createLeftWing(width, height, colorRGB) {
      let leftWingSprite = new GAME.model.sprite.EllipseSprite();

      leftWingSprite.setWidth(width);
      leftWingSprite.setHeight(height);

      leftWingSprite.setFillColor(colorRGB);

      return leftWingSprite;
    }
    createRightWing(width, height, colorRGB) {
      let rightWingSprite = new GAME.model.sprite.EllipseSprite();

      rightWingSprite.setWidth(width);
      rightWingSprite.setHeight(height);

      rightWingSprite.setFillColor(colorRGB);

      return rightWingSprite;
    }
  }
  return EllipseEnemyFactory;
})();
