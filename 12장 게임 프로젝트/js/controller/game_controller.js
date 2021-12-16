GAME.createNameSpace("GAME.controller.GameController");

GAME.controller.GameController = (function () {
  let IGameContext = GAME.controller.scene.IGameContext;
  class GameController extends IGameContext {
    constructor(model) {
      this.model = model;
      this.view = null;
      this.timer = null;
    }

    setGameView(gameView) {
      this.view = gameView;
    }

    start() {
      let GameConstants = GAME.app.GameConstants;
      let MenuGameScene = GAME.controller.scene.MenuGameScene;

      this.changeScene(MenuGameScene.getInstance());

      let self = this;

      this.timer = window.setInterval(function () {
        console.log("time : " + new Date());

        self.model.updateScene(self);

        self.model.runSprites();

        self.view.repaint();

        self.model.increaseFrameIndex();
      }, GameConstants.INTERVAL_TIME);
    }

    stop() {
      console.log("stop");

      if (this.timer !== null) {
        window.clearInterval(this.timer);
      }
    }

    getCurrentFrameIndex() {
      return this.model.getFrameIndex();
    }

    getFrameDuration() {
      return this.model.getFrameDuration();
    }

    changeScene(scene) {
      this.model.changeScene(scene, this);
    }

    getScreenHeight() {
      return this.view.getHeight();
    }

    getScreenWidth() {
      return this.view.getWidth();
    }

    repaintView() {
      this.view.repaint();
    }
  }

  return GameController;
})();
