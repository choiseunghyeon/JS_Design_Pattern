PAINTER.createNameSpace("PAINTER.model.struct.Point");

PAINTER.model.struct.Point = (function () {
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }

  return Point;
})();
