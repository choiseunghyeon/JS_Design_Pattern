GAME.createNameSpace("GAME.app.GameMain");

GAME.app.GameMain = (function () {
  class GameMain {
    constructor(gameDivId) {
      const GameModel = GAME.model.GameModel;
      const GameView = GAME.view.GameView;
      const GameController = GAME.controller.GameController;
      const ToolbarPanel = GAME.view.panel.ToolbarPanel;

      let game = document.getElementById(gameDivId);

      let toolbar = document.createElement("div");
      let gameCanvas = document.createElement("canvas");

      game.appendChild(toolbar);
      game.appendChild(gameCanvas);

      let gameModel = new GameModel();
      let gameController = new GameController(gameModel);
      let gameView = new GameView(gameCanvas, gameModel);

      gameController.setGameView(gameView);

      let toolbarPanel = new ToolbarPanel(gameController);
      toolbarPanel.initLayout(toolbar);

      this.setup(gameController);

      gameView.repaint();
    }

    setup(gameController) {
      this.loadResource();

      let SpriteFactory = GAME.controller.factory.SpriteFactory;
      let shapeSprite = SpriteFactory.createRectangleSprite();

      shapeSprite.setAnchorX(0);
      shapeSprite.setAnchorY(0);

      shapeSprite.setX(50);
      shapeSprite.setY(50);
      shapeSprite.setWidth(200);
      shapeSprite.setHeight(150);

      shapeSprite.setFillColor("red");

      gameController.addSprite(shapeSprite);

      shapeSprite = SpriteFactory.createEllipseSprite();

      shapeSprite.setAnchorX(0);
      shapeSprite.setAnchorY(0);

      shapeSprite.setX(300);
      shapeSprite.setY(50);
      shapeSprite.setWidth(200);
      shapeSprite.setHeight(150);

      shapeSprite.setFillColor("blue");
      gameController.addSprite(shapeSprite);

      let GameConstants = GAME.app.GameConstants;

      shapeSprite = SpriteFactory.createImageSprite(GameConstants.PLAYER_SPRITE_IMAGE_NAME, GameConstants.PLAYER_SPRITE_IMAGE_COUNT);

      shapeSprite.setAnchorX(0);
      shapeSprite.setAnchorY(0);

      shapeSprite.setX(50);
      shapeSprite.setY(250);
      gameController.addSprite(shapeSprite);

      let label = "scroeLabel";
      let labelSprite = SpriteFactory.createLabelSprite(label, 100, 50);

      labelSprite.setAnchorX(0);
      labelSprite.setAnchorY(0);

      labelSprite.setX(200);
      labelSprite.setY(250);

      labelSprite.setWidth(100);
      labelSprite.setHeight(50);

      gameController.addSprite(labelSprite);

      let time = 10;

      let currentFrameIndex = gameController.getCurrentFrameIndex();
      let frameDuration = gameController.getFrameDuration();

      let RectangleEnemyFactory = GAME.controller.factory.RectangleEnemyFactory;
      let EllipseEnemyFactory = GAME.controller.factory.EllipseEnemyFactory;

      let enemyFactory = new RectangleEnemyFactory();
      let enemySprite = enemyFactory.createEnemy();

      enemySprite.setX(350);
      enemySprite.setY(250);

      let fadeOutAction = new GAME.model.action.FadeOutAction(time);
      fadeOutAction.setStartFrameIndex(currentFrameIndex, frameDuration);
      enemySprite.setAction(fadeOutAction);

      gameController.addSprite(enemySprite);

      enemyFactory = new EllipseEnemyFactory();
      enemySprite = enemyFactory.createEnemy();

      enemySprite.setX(450);
      enemySprite.setY(250);

      let byPositionX = 0;
      let byPositionY = 500;
      let moveByAction = new GAME.model.action.MoveByAction(time, byPositionX, byPositionY);

      moveByAction.setStartFrameIndex(currentFrameIndex, frameDuration);
      enemySprite.setAction(moveByAction);
      gameController.addSprite(enemySprite);
    }

    loadResource() {
      let GameConstants = GAME.app.GameConstants;
      let ImageRepository = GAME.controller.repository.ImageRepository;

      let imageRepository = ImageRepository.getInstance();
      let imageInfo = {
        name: GameConstants.PLAYER_SPRITE_IMAGE_NAME,
        count: GameConstants.PLAYER_SPRITE_IMAGE_COUNT,
      };

      imageRepository.queryImageInfo(imageInfo);

      let loadingPercentComplete = 0;

      let imageLoaderTimer = window.setInterval(function loadImages() {
        loadingPercentComplete = imageRepository.loadImages();

        if (loadingPercentComplete === 100) {
          window.clearInterval(imageLoaderTimer);
          console.log("finished loading images");
        }
      }, GameConstants.INTERVAL_TIME);
    }
  }
  return GameMain;
})();
