GAME.createNameSpace("GAME.controller.scene.ResultGameScene");

GAME.controller.scene.ResultGameScene = (function () {
  let ImplGameScene = GAME.controller.scene.ImplGameScene;
  class ResultGameScene extends ImplGameScene {
    constructor() {
      super();

      this.restartSprite = null;
      this.menuSprite = null;
      this.quitSprite = null;

      if (ResultGameScene._instance) {
        return ResultGameScene._instance;
      }

      ResultGameScene._instance = this;
    }

    static getInstance() {
      if (!ResultGameScene._instance) {
        ResultGameScene._instance = new ResultGameScene();
      }

      return ResultGameScene._instance;
    }

    setup(context) {
      let SpriteFactory = GAME.controller.factory.SpriteFactory;

      let screenWidth = context.getScreenWidth();
      let screenHeight = context.getScreenHeight();

      let width = 150;
      let height = 50;

      let between = 10;

      let labelCount = 3;

      let offsetX = screenWidth / 2 - width / 2;
      let offsetY = (screenHeight - (height * labelCount + between * (labelCount - 1))) / 2;

      if (this.restartSprite === null) {
        this.restartSprite = SpriteFactory.createLabelSprite("Game ReStart!!", width, height);

        this.restartSprite.setX(offsetX);
        this.restartSprite.setY(offsetY);
      }

      offsetX += height + between;

      if (this.menuSprite === null) {
        this.menuSprite = SpriteFactory.createLabelSprite("Menu", width, height);

        this.menuSprite.setX(offsetX);
        this.menuSprite.setY(offsetY);
      }
      offsetX += height + between;

      if (this.quitSprite === null) {
        this.quitSprite = SpriteFactory.createLabelSprite("Quit", width, height);

        this.quitSprite.setX(offsetX);
        this.quitSprite.setY(offsetY);
      }
    }

    getSprites() {
      let sprites = [];

      sprites.push(this.restartSprite);
      sprites.push(this.menuSprite);
      sprites.push(this.quitSprite);

      return sprites;
    }
  }

  return ResultGameScene;
})();
