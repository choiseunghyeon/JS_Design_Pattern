GAME.createNameSpace("GAME.controller.factory.AbstractEnemyFactory");

GAME.controller.factory.AbstractEnemyFactory = (function () {
  class AbstractEnemyFactory {
    createEnemy() {
      let bodySprite = this.createBody(15, 50);
      let leftWingSprite = this.createLeftWing(30, 20, "red");
      let rightWingSprite = this.createRightWing(30, 20, "red");

      let airplaneCompositeSprite = new GAME.model.sprite.AirplaneCompositeSprite();

      airplaneCompositeSprite.addSprite(bodySprite);
      airplaneCompositeSprite.addSprite(leftWingSprite);
      airplaneCompositeSprite.addSprite(rightWingSprite);

      return airplaneCompositeSprite;
    }

    createBody(width, height) {
      throw new Error("implement this method");
    }
    createLeftWing(width, height) {
      throw new Error("implement this method");
    }
    createRightWing(width, height) {
      throw new Error("implement this method");
    }
  }
  return AbstractEnemyFactory;
})();
