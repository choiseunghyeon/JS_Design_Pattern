GAME.createNameSpace("GAME.controller.scene.MenuGameScene");

GAME.controller.scene.MenuGameScene = (function () {
  let ImplGameScene = GAME.controller.scene.ImplGameScene;
  class MenuGameScene extends ImplGameScene {
    constructor() {
      super();

      this.startSprite = null;
      this.configSprite = null;

      if (MenuGameScene._instance) {
        return MenuGameScene._instance;
      }

      MenuGameScene._instance = this;
    }

    static getInstance() {
      if (!MenuGameScene._instance) {
        MenuGameScene._instance = new MenuGameScene();
      }

      return MenuGameScene._instance;
    }

    setup(context) {
      let SpriteFactory = GAME.controller.factory.SpriteFactory;

      let screenWidth = context.getScreenWidth();
      let screenHeight = context.getScreenHeight();

      let width = 150;
      let height = 50;

      let between = 10;

      let labelCount = 2;

      let offsetX = screenWidth / 2 - width / 2;
      let offsetY = (screenHeight - (height * labelCount + between * (labelCount - 1))) / 2;

      if (this.startSprite === null) {
        this.startSprite = SpriteFactory.createLabelSprite("Game Start!!", width, height);

        this.startSprite.setX(offsetX);
        this.startSprite.setY(offsetY);
      }

      offsetX += height + between;

      if (this.configSprite === null) {
        this.configSprite = SpriteFactory.createLabelSprite("Configuration", width, height);

        this.configSprite.setX(offsetX);
        this.configSprite.setY(offsetY);
      }
    }

    getSprites() {
      let sprites = [];
      sprites.push(this.startSprite);
      sprites.push(this.configSprite);

      return sprites;
    }
  }

  return MenuGameScene;
})();
