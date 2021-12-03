PAINTER.createNameSpace("PAINTER.view.PainterView");

PAINTER.view.PainterView = (function () {
  class PainterView {
    constructor() {
      let PainterConstants = PAINTER.app.PainterConstants;

      let PainterModel = PAINTER.model.PainterModel;
      let LinePiece = PAINTER.model.piece.LinePiece;
      let RectanglePiece = PAINTER.model.piece.RectanglePiece;
      let EllipsePiece = PAINTER.model.piece.EllipsePiece;

      // 캔버스 요소 가져오기
      let canvas = document.getElementById("mycanvas");
      canvas.width = PainterConstants.PAINTER_WIDTH;
      canvas.height = PainterConstants.PAINTER_HEIGHT;

      canvas.style.border = "1px solid gray";
      canvas.style.cursor = "pointer";

      // 캔버스 렌더링 컨텍스트 가져오기
      let ctx = canvas.getContext("2d");

      this.ctx = ctx;

      this.painterModel = new PainterModel();

      const linePiece = new LinePiece(50, 50, 100, 80);
      linePiece.setStrokeColor("pink");

      this.painterModel.addPiece(linePiece);

      const rectanglePiece = new RectanglePiece(110, 20, 100, 50);
      rectanglePiece.setStrokeColor("red");
      rectanglePiece.setFillColor("blue");

      this.painterModel.addPiece(rectanglePiece);

      const ellipsePiece = new EllipsePiece(110, 120, 100, 80);
      ellipsePiece.setStrokeColor("green");
      ellipsePiece.setFillColor("yellow");

      this.painterModel.addPiece(ellipsePiece);
    }

    repaint() {
      this.painterModel.drawPieces(this.ctx);
    }
  }

  return PainterView;
})();
