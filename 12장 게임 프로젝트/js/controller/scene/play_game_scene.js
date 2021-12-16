GAME.createNameSpace("GAME.controller.scene.PlayGameScene");

GAME.controller.scene.PlayGameScene = (function () {
  let ImplGameScene = GAME.controller.scene.ImplGameScene;
  class PlayGameScene extends ImplGameScene {
    constructor() {
      super();

      this.playerSprite = null;

      this.enemySprites = [];

      this.lifeSprite = null;
      this.scoreSprite = null;

      this.stage = 1;

      if (PlayGameScene._instance) {
        return PlayGameScene._instance;
      }

      PlayGameScene._instance = this;
    }

    static getInstance() {
      if (!PlayGameScene._instance) {
        PlayGameScene._instance = new PlayGameScene();
      }

      return PlayGameScene._instance;
    }

    setLife(life) {
      this.lifeSprite.setLabel("" + life);
    }
    setLife(score) {
      this.scoreSprite.setLabel("" + score);
    }
    setup(context) {
      let SpriteFactory = GAME.controller.factory.SpriteFactory;
      let GameConstants = GAME.app.GameConstants;

      this.playerSprite = SpriteFactory.createImageSprite(GameConstants.PLAYER_SPRITE_IMAGE_NAME, GameConstants.PLAYER_SPRITE_IMAGE_COUNT);

      this.playerSprite.setAnchorX(0.5);
      this.playerSprite.setAnchorY(1.0);

      this.playerSprite.setX(context.getScreenWidth() / 2);
      this.playerSprite.setY(context.getScreenHeight());

      let screenWidth = context.getScreenWidth();

      let width = 150;
      let height = 30;

      if (this.lifeSprite === null) {
        this.lifeSprite = SpriteFactory.createLabelSprite("" + GameConstants.MAX_LIFE, width, height);

        this.lifeSprite.setAnchorX(0);
        this.lifeSprite.setAnchorY(0);

        this.lifeSprite.setX(0);
        this.lifeSprite.setY(0);
      }

      if (this.scoreSprite === null) {
        this.scoreSprite = SpriteFactory.createLabelSprite("0", width, height);

        this.scoreSprite.setAnchorX(0);
        this.scoreSprite.setAnchorY(0);

        this.scoreSprite.setX(screenWidth - width);
        this.scoreSprite.setY(0);
      }
    }

    createEnemySprite(curerntFrameIndex, frameDuration) {
      let MoveByAction = GAME.model.action.MoveByAction;
      let RectangleEnemyFactory = GAME.controller.factory.RectangleEnemyFactory;
      let EllipseEnemyFactory = GAME.controller.factory.EllipseEnemyFactory;

      let time = 10;

      let byPositionX = 0;
      let byPositionY = 1000;
      let moveByAction = new MoveByAction(time, byPositionX, byPositionY);

      let enemyFactory = null;

      if (this.stage === 1) {
        enemyFactory = new RectangleEnemyFactory();
      } else {
        enemyFactory = new EllipseEnemyFactory();
      }

      let enemySprite = enemyFactory.createEnemy();

      moveByAction.setStartFrameIndex(curerntFrameIndex, frameDuration);
      enemySprite.setAction(moveByAction);

      return enemySprite;
    }

    createEnemy(context) {
      let GameConstants = GAME.app.GameConstants;

      let currentFrameIndex = context.getCurrentFrameIndex();
      let frameDuration = context.getFrameDuration();

      let screenWidth = context.getScreenWidth();
      let positionX = 0;
      let positionY = 0;

      if (currentFrameIndex % GameConstants.CREATE_ENEMY_PERIOD === 0) {
        let airplaneCompositeSprite = this.createEnemySprite(currentFrameIndex, frameDuration);

        positionX = parseFloat(screenWidth * Math.random());

        airplaneCompositeSprite.setX(positionX);
        airplaneCompositeSprite.setY(positionY);

        this.enemySprites.push(airplaneCompositeSprite);
      }
    }

    getSprites() {
      let sprites = [];

      if (this.playerSprite !== null) {
        sprites.push(this.playerSprite);
      }

      this.enemySprites.forEach(enemySprite => sprites.push(enemySprite));

      if (this.lifeSprite !== null) {
        sprites.push(this.lifeSprite);
      }

      if (this.scoreSprite !== null) {
        sprites.push(this.scoreSprite);
      }

      return sprites;
    }

    update(context, frameIndex) {
      super.update(context, frameIndex);

      this.createEnemy(context);
    }

    finish() {
      let GameConstants = GAME.app.GameConstants;

      this.enemySprites = [];

      this.setLife(GameConstants.MAX_LIFE);
      this.setScore(0);

      if (this.stage === GameConstants.MAX_STAGE) {
        this.stage = 1;
      } else {
        this.stage++;
      }
    }
  }

  return PlayGameScene;
})();
