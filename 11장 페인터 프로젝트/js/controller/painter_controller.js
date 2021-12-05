PAINTER.createNameSpace("PAINTER.controller.PainterController");

PAINTER.controller.PainterController = (function () {
  class PainterController {
    constructor() {
      this.painterModel = null;
      this.painterView = null;

      this.startX;
      this.startY;
      this.endX;
      this.endY;

      this.points = [];
    }

    controlPress(mouseX, mouseY) {
      let PainterConstants = PAINTER.app.PainterConstants;
      let Point = PAINTER.model.struct.Point;

      let pieceType = this.painterModel.getPieceType();

      this.startX = mouseX;
      this.startY = mouseY;

      if (pieceType === PainterConstants.FREE_PATH) {
        this.points.push(new Point(this.startX, this.startY));
      }
    }

    controlRelease(mouseX, mouseY) {
      let PainterConstants = PAINTER.app.PainterConstants;
      let LinePiece = PAINTER.model.piece.LinePiece;
      let RectanglePiece = PAINTER.model.piece.RectanglePiece;
      let EllipsePiece = PAINTER.model.piece.EllipsePiece;
      let FreePathPiece = PAINTER.model.piece.FreePathPiece;

      let pieceType = this.painterModel.getPieceType();

      this.endX = mouseX;
      this.endY = mouseY;

      if (pieceType === PainterConstants.LINE) {
        this.painterModel.addPiece(new LinePiece(this.startX, this.startY, this.endX, this.endY));
      } else if (pieceType === PainterConstants.RECTANGLE) {
        let x = Math.min(this.startX, this.endX);
        let y = Math.min(this.startY, this.endY);
        let width = Math.abs(this.startX - this.endX);
        let height = Math.abs(this.startY - this.endY);

        this.painterModel.addPiece(new RectanglePiece(x, y, width, height));
      } else if (pieceType === PainterConstants.ELLIPSE) {
        let x = Math.min(this.startX, this.endX);
        let y = Math.min(this.startY, this.endY);
        let width = Math.abs(this.startX - this.endX);
        let height = Math.abs(this.startY - this.endY);

        this.painterModel.addPiece(new EllipsePiece(x, y, width, height));
      } else if (pieceType === PainterConstants.FREE_PATH) {
        this.painterModel.addPiece(new FreePathPiece(this.points));
      }

      this.startX = 0;
      this.startY = 0;

      this.endX = 0;
      this.endY = 0;

      if (pieceType === PainterConstants.FREE_PATH) {
        this.points = [];
      }
    }

    controlDrag(mouseX, mouseY) {
      let PainterConstants = PAINTER.app.PainterConstants;
      let Point = PAINTER.model.struct.Point;

      let pieceType = this.painterModel.getPieceType();

      this.endX = mouseX;
      this.endY = mouseY;

      if (pieceType === PainterConstants.FREE_PATH) {
        this.points.push(new Point(this.endX, this.endY));
      }

      this.painterView.drawing();
    }

    isValidDrawing() {
      return this.startX != this.endX || this.startY != this.endY;
    }

    drawing(ctx) {
      let PainterConstants = PAINTER.app.PainterConstants;
      let EllipsePiece = PAINTER.model.piece.EllipsePiece;

      let pieceType = this.painterModel.getPieceType();

      if (pieceType === PainterConstants.LINE) {
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY);
        ctx.lineTo(this.endX, this.endY);
        ctx.stroke();
      } else if (pieceType === PainterConstants.RECTANGLE) {
        const w = this.endX - this.startX;
        const h = this.endY - this.startY;

        ctx.fillRect(this.startX, this.startY, w, h);
        ctx.strokeRect(this.startX, this.startY, w, h);
      } else if (pieceType === PainterConstants.ELLIPSE) {
        const w = this.endX - this.startX;
        const h = this.endY - this.startY;

        EllipsePiece.drawEllipseByBezierCurve(ctx, this.startX, this.startY, w, h);
      } else if (pieceType === PainterConstants.FREE_PATH) {
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY);

        for (const point of this.points) {
          ctx.lineTo(point.x, point.y);
        }

        ctx.stroke();
      }
    }

    setPieceType(pieceType) {
      this.painterModel.setPieceType(pieceType);
    }

    setPainterView(painterView) {
      this.painterView = painterView;
    }

    setPainterModel(painterModel) {
      this.painterModel = painterModel;
    }
  }

  return PainterController;
})();
