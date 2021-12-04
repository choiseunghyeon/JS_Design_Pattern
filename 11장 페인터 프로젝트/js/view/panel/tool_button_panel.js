PAINTER.createNameSpace("PAINTER.view.panel.ToolButtonPanel");

PAINTER.view.panel.ToolButtonPanel = (function () {
  class ToolButtonPanel {
    constructor(painterView) {
      this.painterView = painterView;
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

      let PainterConstants = PAINTER.app.PainterConstants;

      let painterViewThis = this.painterView;

      btnLine.addEventListener("click", function (e) {
        painterViewThis.setPieceType(PainterConstants.LINE);
      });
      btnRectangle.addEventListener("click", function (e) {
        painterViewThis.setPieceType(PainterConstants.RECTANGLE);
      });
      btnEllipse.addEventListener("click", function (e) {
        painterViewThis.setPieceType(PainterConstants.ELLIPSE);
      });
      btnFreePath.addEventListener("click", function (e) {
        painterViewThis.setPieceType(PainterConstants.FREE_PATH);
      });
    }

    createButton(imagePath, id) {
      let inputImage = document.createElement("input");
      inputImage.setAttribute("type", "image");
      inputImage.setAttribute("src", imagePath);
      inputImage.setAttribute("id", id);

      return inputImage;
    }
  }

  return ToolButtonPanel;
})();
