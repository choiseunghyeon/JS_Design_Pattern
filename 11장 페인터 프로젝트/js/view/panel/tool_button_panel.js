PAINTER.createNameSpace("PAINTER.view.panel.ToolButtonPanel");

PAINTER.view.panel.ToolButtonPanel = (function () {
  class ToolButtonPanel {
    constructor() {
      this.painterController = null;
    }

    initLayout() {
      let toolbar = document.getElementById("toolbar");

      let inputImage = this.createButton("./images/line.gif", "btnLine");
      toolbar.appendChild(inputImage);

      inputImage = this.createButton("./images/rectangle.gif", "btnRectangle");
      toolbar.appendChild(inputImage);

      inputImage = this.createButton("./images/ellipse.gif", "btnEllipse");
      toolbar.appendChild(inputImage);

      inputImage = this.createButton("./images/free_path.gif", "btnFreePath");
      toolbar.appendChild(inputImage);

      let btnLine = document.getElementById("btnLine");
      let btnRectangle = document.getElementById("btnRectangle");
      let btnEllipse = document.getElementById("btnEllipse");
      let btnFreePath = document.getElementById("btnFreePath");

      let painterController = this.painterController;

      let LinePieceManager = PAINTER.controller.manager.LinePieceManager;
      let RectanglePieceManager = PAINTER.controller.manager.RectanglePieceManager;
      let EllipsePieceManager = PAINTER.controller.manager.EllipsePieceManager;
      let FreePathPieceManager = PAINTER.controller.manager.FreePathPieceManager;

      btnLine.addEventListener("click", function (e) {
        painterController.setPieceManager(new LinePieceManager());
      });
      btnRectangle.addEventListener("click", function (e) {
        painterController.setPieceManager(new RectanglePieceManager());
      });
      btnEllipse.addEventListener("click", function (e) {
        painterController.setPieceManager(new EllipsePieceManager());
      });
      btnFreePath.addEventListener("click", function (e) {
        painterController.setPieceManager(new FreePathPieceManager());
      });
    }

    createButton(imagePath, id) {
      let inputImage = document.createElement("input");
      inputImage.setAttribute("type", "image");
      inputImage.setAttribute("src", imagePath);
      inputImage.setAttribute("id", id);

      return inputImage;
    }

    setPainterController(painterController) {
      this.painterController = painterController;
    }
  }

  return ToolButtonPanel;
})();
