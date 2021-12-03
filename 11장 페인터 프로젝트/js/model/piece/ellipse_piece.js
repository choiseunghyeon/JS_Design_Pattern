PAINTER.createNameSpace("PAINTER.model.piece.EllipsePiece");

PAINTER.model.piece.EllipsePiece = (function () {
  let AbstractPiece = PAINTER.model.piece.AbstractPiece;
  class EllipsePiece extends AbstractPiece {
    constructor(x, y, width, height) {
      super();

      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }

    draw(ctx) {
      this.applyStyle(ctx);
      this.drawEllipseByBezierCurve(ctx, this.x, this.y, this.width, this.height);
    }

    drawEllipseByBezierCurve(ctx, x, y, w, h) {
      let kappa = 0.5522848,
        ox = (w / 2) * kappa,
        oy = (h / 2) * kappa,
        xe = x + w,
        ye = y + h,
        xm = x + w / 2,
        ym = y + h / 2;

      ctx.beginPath();
      ctx.moveTo(x, ym);
      ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
      ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
      ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
      ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);

      ctx.fill();

      ctx.stroke();
    }
  }

  return EllipsePiece;
})();
