PAINTER.createNameSpace("PAINTER.view.PainterView");

PAINTER.view.PainterView = (function () {
  class PainterView {
    constructor() {
      let PainterConstants = PAINTER.app.PainterConstants;

      let PainterModel = PAINTER.model.PainterModel;
      let LinePiece = PAINTER.model.piece.LinePiece;
      let RectanglePiece = PAINTER.model.piece.RectanglePiece;

      // 캔버스 요소 가져오기
      let canvas = document.getElementById("mycanvas");
      canvas.width = PainterConstants.PAINTER_WIDTH;
      canvas.height = PainterConstants.PAINTER_HEIGHT;

      canvas.style.border = "1px solid gray";
      canvas.style.cursor = "pointer";

      // 캔버스 렌더링 컨텍스트 가져오기
      let ctx = canvas.getContext("2d");

      ctx.lineWidth = 10;
      ctx.strokeStyle = "red";
      ctx.fillStyle = "blue";

      this.ctx = ctx;

      this.painterModel = new PainterModel();

      this.painterModel.addPiece(new LinePiece(50, 50, 100, 80));
      this.painterModel.addPiece(new RectanglePiece(110, 20, 100, 50));
    }

    repaint() {
      this.painterModel.drawPieces(this.ctx);
    }
  }

  return PainterView;
})();
