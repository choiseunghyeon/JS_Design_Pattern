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

      let LineState = PAINTER.controller.state.LineState;
      let RectangleState = PAINTER.controller.state.RectangleState;
      let EllipseState = PAINTER.controller.state.EllipseState;
      let FreePathState = PAINTER.controller.state.FreePathState;

      btnLine.addEventListener("click", function (e) {
        painterController.setState(LineState.getInstance());
      });
      btnRectangle.addEventListener("click", function (e) {
        painterController.setState(RectangleState.getInstance());
      });
      btnEllipse.addEventListener("click", function (e) {
        painterController.setState(EllipseState.getInstance());
      });
      btnFreePath.addEventListener("click", function (e) {
        painterController.setState(FreePathState.getInstance());
      });

      let sizeList = [1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 20, 24, 28];
      let select = document.createElement("select");
      sizeList.forEach(size => {
        let option = document.createElement("option");
        option.setAttribute("value", size.toString());
        let optionText = document.createTextNode(size.toString());
        option.appendChild(optionText);

        select.appendChild(option);
      });
      select.selectedIndex = 7;

      let labelStrokeWidth = document.createElement("label");
      let labelStrokeWidthText = document.createTextNode("선 너비: ");

      labelStrokeWidth.appendChild(labelStrokeWidthText);
      labelStrokeWidth.appendChild(select);

      toolbar.appendChild(labelStrokeWidth);

      select.addEventListener("change", function (e) {
        painterController.setStrokeWidth(this.value);
      });

      let strokeColorChangeEventListener = function (e) {
        painterController.setStrokeColor(this.value);
      };
      let labelForStrokeColor = this.createLabelForColor("선 색: ", "#FF0000", strokeColorChangeEventListener);
      toolbar.appendChild(labelForStrokeColor);

      let fillColorChangeEventListener = function (e) {
        painterController.setFillColor(this.value);
      };
      let labelForFillColor = this.createLabelForColor("채움 색 : ", "#0000FF", fillColorChangeEventListener);
      toolbar.appendChild(labelForFillColor);
    }

    createButton(imagePath, id) {
      let inputImage = document.createElement("input");
      inputImage.setAttribute("type", "image");
      inputImage.setAttribute("src", imagePath);
      inputImage.setAttribute("id", id);

      return inputImage;
    }

    createLabelForColor(text, defaultValue, changeEventListner) {
      let labelForColor = document.createElement("label");
      let labelText = document.createTextNode(text);

      let inputColor = document.createElement("input");
      inputColor.setAttribute("type", "color");

      inputColor.value = defaultValue;

      inputColor.addEventListener("change", changeEventListner);

      labelForColor.appendChild(labelText);
      labelForColor.appendChild(inputColor);

      return labelForColor;
    }

    setPainterController(painterController) {
      this.painterController = painterController;
    }
  }

  return ToolButtonPanel;
})();
