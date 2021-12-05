PAINTER.createNameSpace("PAINTER.view.PainterView");

PAINTER.view.PainterView = (function () {
  let IPainterObserver = PAINTER.controller.observer.IPainterObserver;

  class PainterView extends IPainterObserver {
    constructor() {
      super();

      let PainterConstants = PAINTER.app.PainterConstants;

      // 캔버스 요소 가져오기
      let canvas = document.getElementById("mycanvas");
      canvas.width = PainterConstants.PAINTER_WIDTH;
      canvas.height = PainterConstants.PAINTER_HEIGHT;

      canvas.style.border = "1px solid gray";
      canvas.style.cursor = "pointer";

      this.canvas = canvas;
      // 캔버스 렌더링 컨텍스트 가져오기
      let ctx = canvas.getContext("2d");

      this.ctx = ctx;

      ctx.lineWidth = 10;
      ctx.strokeStyle = "red";
      ctx.fillStyle = "blue";

      this.painterModel = null;
      this.painterController = null;
      this.canvasImageData = null;

      canvas.addEventListener("mousedown", this.handleMouseEvent.bind(this));
    }

    handleMouseEvent(e) {
      let canvas = this.canvas;
      let painterViewThis = this;
      let painterController = this.painterController;

      this.saveImageData();

      let pressPoint = this.relativePosition(e, canvas);

      painterController.controlPress(pressPoint.x, pressPoint.y);

      console.log(`mousedown p.x = ${pressPoint.x} p.y = ${pressPoint.y}`);

      let mousemoveEventListenr = function (e) {
        let movePoint = painterViewThis.relativePosition(e, painterViewThis.canvas);

        painterController.controlDrag(movePoint.x, movePoint.y);
        console.log(`mousemove p.x = ${movePoint.x} p.y = ${movePoint.y}`);
      };
      document.addEventListener("mousemove", mousemoveEventListenr);

      let mouseupEventListenr = function (e) {
        let upPoint = painterViewThis.relativePosition(e, canvas);

        painterController.controlRelease(upPoint.x, upPoint.y);

        console.log(`mouseup p.x = ${upPoint.x} p.y = ${upPoint.y}`);
        document.removeEventListener("mousemove", mousemoveEventListenr);
        document.removeEventListener("mouseup", mouseupEventListenr);
      };
      document.addEventListener("mouseup", mouseupEventListenr);
    }

    drawing() {
      this.ctx.putImageData(this.canvasImageData, 0, 0);

      if (this.painterController !== null) {
        this.painterController.drawing(this.ctx);
      }
    }

    saveImageData() {
      this.canvasImageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
    }

    setPainterModel(painterModel) {
      this.painterModel = painterModel;
    }

    setPainterController(painterController) {
      this.painterController = painterController;
    }

    relativePosition(event, element) {
      let rect = element.getBoundingClientRect();
      return {
        x: Math.floor(event.clientX - rect.left),
        y: Math.floor(event.clientY - rect.top),
      };
    }

    repaint() {
      // 캔버스를 이전 이미지로 복원
      this.ctx.putImageData(this.canvasImageData, 0, 0);
      this.painterModel.drawPieces(this.ctx);
    }

    update() {
      this.repaint();
    }
  }

  return PainterView;
})();
