PAINTER.createNameSpace("PAINTER.view.PainterView");

PAINTER.view.PainterView = (function () {
  class PainterView {
    constructor() {
      let PainterConstants = PAINTER.app.PainterConstants;

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
    }

    repaint() {
      let x = 10;
      let y = 20;
      let w = 100;
      let h = 50;

      this.ctx.fillRect(x, y, w, h);
      this.ctx.strokeRect(x, y, w, h);
    }
  }

  return PainterView;
})();
