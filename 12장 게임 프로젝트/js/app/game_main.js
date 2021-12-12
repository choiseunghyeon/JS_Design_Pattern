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
      let shapeSprite = new GAME.model.sprite.RectangleSprite();
      shapeSprite.setX(50);
      shapeSprite.setY(50);
      shapeSprite.setWidth(200);
      shapeSprite.setHeight(150);

      shapeSprite.setFillColor("red");

      gameController.addSprite(shapeSprite);

      shapeSprite = new GAME.model.sprite.EllipseSprite();

      shapeSprite.setX(300);
      shapeSprite.setY(50);
      shapeSprite.setWidth(200);
      shapeSprite.setHeight(150);

      shapeSprite.setFillColor("blue");
      gameController.addSprite(shapeSprite);
    }
  }
  return GameMain;
})();
