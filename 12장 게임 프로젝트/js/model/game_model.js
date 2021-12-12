GAME.createNameSpace("GAME.model.GameModel");

GAME.model.GameModel = (function () {
  class GameModel {
    constructor() {
      this.sprites = [];
    }

    getSprites() {
      return this.sprites;
    }

    addSprite(sprite) {
      this.sprites.push(sprite);
    }
  }

  return GameModel;
})();
