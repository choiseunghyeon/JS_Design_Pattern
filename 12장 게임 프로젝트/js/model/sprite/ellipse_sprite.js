GAME.createNameSpace("GAME.model.sprite.EllipseSprite");

GAME.model.sprite.EllipseSprite = (function () {
  let AbstractSprite = GAME.model.sprite.AbstractSprite;

  class EllipseSprite extends AbstractSprite {
    constructor() {
      super();

      this.x = 0;
      this.y = 0;
      this.width = 0;
      this.height = 0;
    }

    drawSprite(ctx) {
      ctx.fillStyle = this.fillColor;

      ctx.strokeStyle = "black";

      let x = -1 * this.width * this.anchorX;
      let y = -1 * this.height * this.anchorY;

      this.drawEllipseByBezierCurve(ctx, x, y, this.width, this.height);
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

  return EllipseSprite;
})();
