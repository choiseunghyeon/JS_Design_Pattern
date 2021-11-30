PAINTER.createNameSpace("PAINTER.view.panel.ToolButtonPanel");

PAINTER.view.panel.ToolButtonPanel = (function () {
  class ToolButtonPanel {
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
