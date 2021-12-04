PAINTER.createNameSpace("PAINTER.view.PainterView");

PAINTER.view.PainterView = (function () {
  class PainterView {
    constructor() {
      let PainterConstants = PAINTER.app.PainterConstants;

      let PainterModel = PAINTER.model.PainterModel;

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

      this.painterModel = new PainterModel();

      this.pieceType = PainterConstants.LINE;

      this.startX = 0;
      this.startY = 0;

      this.endX = 0;
      this.endY = 0;

      this.points = [];

      canvas.addEventListener("mousedown", this.handleMouseEvent.bind(this));
    }

    handleMouseEvent(e) {
      let canvas = this.canvas;
      let painterViewThis = this;

      let canvasImageData = this.ctx.getImageData(0, 0, canvas.width, canvas.height);

      let pressPoint = this.relativePosition(e, canvas);

      painterViewThis.startX = pressPoint.x;
      painterViewThis.startY = pressPoint.y;

      this.points = [];

      console.log(`mousedown p.x = ${pressPoint.x} p.y = ${pressPoint.y}`);

      let mousemoveEventListenr = function (e) {
        let movePoint = painterViewThis.relativePosition(e, painterViewThis.canvas);

        painterViewThis.endX = movePoint.x;
        painterViewThis.endY = movePoint.y;

        painterViewThis.points.push(movePoint);
        painterViewThis.ctx.putImageData(canvasImageData, 0, 0);
        painterViewThis.drawing(painterViewThis.ctx);

        console.log(`mousemove p.x = ${movePoint.x} p.y = ${movePoint.y}`);
      };
      document.addEventListener("mousemove", mousemoveEventListenr);

      let mouseupEventListenr = function (e) {
        let upPoint = painterViewThis.relativePosition(e, canvas);

        painterViewThis.endX = upPoint.x;
        painterViewThis.endY = upPoint.y;

        painterViewThis.points.push(upPoint);
        painterViewThis.ctx.putImageData(canvasImageData, 0, 0);
        painterViewThis.drawing(painterViewThis.ctx);
        console.log(`mouseup p.x = ${upPoint.x} p.y = ${upPoint.y}`);
        document.removeEventListener("mousemove", mousemoveEventListenr);
        document.removeEventListener("mouseup", mouseupEventListenr);
      };
      document.addEventListener("mouseup", mouseupEventListenr);
    }

    relativePosition(event, element) {
      let rect = element.getBoundingClientRect();
      return {
        x: Math.floor(event.clientX - rect.left),
        y: Math.floor(event.clientY - rect.top),
      };
    }

    setPieceType(pieceType) {
      this.pieceType = pieceType;
    }

    drawing(ctx) {
      let PainterConstants = PAINTER.app.PainterConstants;

      if (this.pieceType === PainterConstants.LINE) {
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY);
        ctx.lineTo(this.endX, this.endY);
        ctx.stroke();
      } else if (this.pieceType === PainterConstants.RECTANGLE) {
        const w = this.endX - this.startX;
        const h = this.endY - this.startY;

        ctx.fillRect(this.startX, this.startY, w, h);
        ctx.strokeRect(this.startX, this.startY, w, h);
      } else if (this.pieceType === PainterConstants.ELLIPSE) {
        const w = this.endX - this.startX;
        const h = this.endY - this.startY;

        let EllipsePiece = PAINTER.model.piece.EllipsePiece;
        EllipsePiece.drawEllipseByBezierCurve(ctx, this.startX, this.startY, w, h);
      } else if (this.pieceType === PainterConstants.FREE_PATH) {
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY);

        for (const point of this.points) {
          ctx.lineTo(point.x, point.y);
        }

        ctx.stroke();
      }
    }

    repaint() {
      this.painterModel.drawPieces(this.ctx);
    }
  }

  return PainterView;
})();
