GAME.createNameSpace("GAME.model.struct.Rectangle");

GAME.model.struct.Rectangle = (function () {
  class Rectangle {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }

    getWidth() {
      return this.width;
    }

    getHeight() {
      return this.height;
    }

    contains(x, y) {
      if (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height) {
        return true;
      }

      return false;
    }

    intersects(r) {
      let tw = this.width;
      let th = this.height;
      let rw = r.width;
      let rh = r.height;

      if (rw <= 0 || rh <= 0 || tw <= 0 || th <= 0) {
        return false;
      }

      let tx = this.x;
      let ty = this.y;
      let rx = r.x;
      let ry = r.y;

      rw += rx;
      rh += ry;
      tw += tx;
      th += ty;

      return;
    }
  }

  return Rectangle;
})();
