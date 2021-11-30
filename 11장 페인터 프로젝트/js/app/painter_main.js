PAINTER.createNameSpace("PAINTER.app.PainterMain");

PAINTER.app.PainterMain = (function () {
  class PainterMain {
    constructor() {
      let painterView = new PAINTER.view.PainterView();
      painterView.repaint();

      let toolButtonPanel = new PAINTER.view.panel.ToolButtonPanel();
      toolButtonPanel.initLayout();
    }
  }
  return PainterMain;
})();
