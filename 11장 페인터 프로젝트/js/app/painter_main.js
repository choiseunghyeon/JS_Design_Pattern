PAINTER.createNameSpace("PAINTER.app.PainterMain");

PAINTER.app.PainterMain = (function () {
  class PainterMain {
    constructor(painterId) {
      let painter = document.getElementById(painterId);

      let toolbar = document.createElement("div");
      toolbar.setAttribute("id", "toolbar");

      let mycanvas = document.createElement("canvas");
      mycanvas.setAttribute("id", "mycanvas");

      painter.appendChild(toolbar);
      painter.appendChild(mycanvas);

      this.painterModel = new PAINTER.model.PainterModel();
      this.painterView = new PAINTER.view.PainterView();
      this.painterController = new PAINTER.controller.PainterController();
      this.toolButtonPanel = new PAINTER.view.panel.ToolButtonPanel();

      this.setup();
      this.toolButtonPanel.initLayout();
    }

    setup() {
      this.painterController.setPainterModel(this.painterModel);
      this.painterController.setPainterView(this.painterView);

      this.painterView.setPainterController(this.painterController);
      this.painterView.setPainterModel(this.painterModel);

      this.toolButtonPanel.setPainterController(this.painterController);

      this.painterModel.registerObserver(this.painterView);
    }
  }
  return PainterMain;
})();
