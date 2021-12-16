GAME.createNameSpace("GAME.controller.scene.ConfigGameScene");

GAME.controller.scene.ConfigGameScene = (function () {
  let ImplGameScene = GAME.controller.scene.ImplGameScene;
  class ConfigGameScene extends ImplGameScene {
    constructor() {
      super();

      this.menuSprite = null;

      if (ConfigGameScene._instance) {
        return ConfigGameScene._instance;
      }

      ConfigGameScene._instance = this;
    }

    static getInstance() {
      if (!ConfigGameScene._instance) {
        ConfigGameScene._instance = new ConfigGameScene();
      }

      return ConfigGameScene._instance;
    }

    finish() {}

    setup(context) {
      let SpriteFactory = GAME.controller.factory.SpriteFactory;

      let screenWidth = context.getScreenWidth();
      let screenHeight = context.getScreenHeight();

      let width = 150;
      let height = 50;

      let between = 10;

      let labelCount = 1;

      let offsetX = screenWidth / 2 - width / 2;
      let offsetY = (screenHeight - (height * labelCount + between * (labelCount - 1))) / 2;

      if (this.menuSprite === null) {
        this.menuSprite = SpriteFactory.createLabelSprite("To Menu", width, height);

        this.menuSprite.setX(offsetX);
        this.menuSprite.setY(offsetY);
      }
    }

    getSprites() {
      let sprites = [];
      sprites.push(this.menuSprite);

      return sprites;
    }
  }

  return ConfigGameScene;
})();
