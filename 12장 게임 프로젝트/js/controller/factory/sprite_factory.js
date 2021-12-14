GAME.createNameSpace("GAME.controller.factory.SpriteFactory");

GAME.controller.factory.SpriteFactory = (function () {
  class SpriteFactory {
    constructor() {}

    static createRectangleSprite() {
      let shapeSprite = new GAME.model.sprite.RectangleSprite();

      shapeSprite.setAnchorX(0);
      shapeSprite.setAnchorY(0);

      shapeSprite.setX(10);
      shapeSprite.setY(10);

      shapeSprite.setWidth(100);
      shapeSprite.setHeight(50);

      shapeSprite.setFillColor("blue");

      return shapeSprite;
    }

    static createEllipseSprite() {
      let shapeSprite = new GAME.model.sprite.EllipseSprite();

      shapeSprite.setAnchorX(0);
      shapeSprite.setAnchorY(0);

      shapeSprite.setX(110);
      shapeSprite.setY(110);

      shapeSprite.setWidth(200);
      shapeSprite.setHeight(150);

      shapeSprite.setFillColor("red");

      return shapeSprite;
    }

    static createImageSprite(imageName, spriteCount) {
      let shapeSprite = new GAME.model.sprite.ImageSprite(imageName, spriteCount);

      shapeSprite.setAnchorX(0);
      shapeSprite.setAnchorY(0);

      shapeSprite.setX(110);
      shapeSprite.setY(110);

      return shapeSprite;
    }

    static createLabelSprite(label, width, height) {
      let labelSprite = new GAME.model.sprite.LabelSprite(label);

      labelSprite.setAnchorX(0);
      labelSprite.setAnchorY(0);

      labelSprite.setWidth(width);
      labelSprite.setHeight(height);

      return labelSprite;
    }
  }
  return SpriteFactory;
})();
