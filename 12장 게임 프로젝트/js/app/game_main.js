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

      let shapeSprite = new GAME.model.sprite.RectangleSprite();

      shapeSprite.setAnchorX(0);
      shapeSprite.setAnchorY(0);

      shapeSprite.setX(50);
      shapeSprite.setY(50);
      shapeSprite.setWidth(200);
      shapeSprite.setHeight(150);

      shapeSprite.setFillColor("red");

      gameController.addSprite(shapeSprite);

      shapeSprite = new GAME.model.sprite.EllipseSprite();

      shapeSprite.setAnchorX(0);
      shapeSprite.setAnchorY(0);

      shapeSprite.setX(300);
      shapeSprite.setY(50);
      shapeSprite.setWidth(200);
      shapeSprite.setHeight(150);

      shapeSprite.setFillColor("blue");
      gameController.addSprite(shapeSprite);

      let GameConstants = GAME.app.GameConstants;

      shapeSprite = new GAME.model.sprite.LabelSprite(GameConstants.PLAYER_SPRITE_IMAGE_NAME, GameConstants.PLAYER_SPRITE_IMAGE_COUNT);

      shapeSprite.setAnchorX(0);
      shapeSprite.setAnchorY(0);

      shapeSprite.setX(50);
      shapeSprite.setY(250);
      gameController.addSprite(shapeSprite);

      let LabelSprite = GAME.model.sprite.LabelSprite;

      let label = "scroeLabel";
      let labelSprite = new LabelSprite(label);

      labelSprite.setAnchorX(0);
      labelSprite.setAnchorY(0);

      labelSprite.setX(200);
      labelSprite.setY(250);

      labelSprite.setWidth(100);
      labelSprite.setHeight(50);

      gameController.addSprite(labelSprite);
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
