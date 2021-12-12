GAME.createNameSpace("GAME.view.GameView");

GAME.view.GameView = (function () {
  class GameView {
    constructor(gameCanvas, gameModel) {
      let GameConstants = GAME.app.GameConstants;

      this.canvas = gameCanvas;

      this.canvas.width = GameConstants.GAME_WIDTH;
      this.canvas.height = GameConstants.GAME_HEIGHT;

      this.canvas.style.border = "1px solid gray";
      this.canvas.style.cursor = "pointer";

      this.ctx = this.canvas.getContext("2d");

      this.ctx.lineWidth = 10;
      this.ctx.strokeStyle = "red";
      this.ctx.fillStyle = "blue";

      this.gameModel = gameModel;
    }

    repaint() {
      let sprites = this.gameModel.getSprites();

      for (const sprite of sprites) {
        sprite.draw(this.ctx);
      }
    }
  }
  return GameView;
})();
