PAINTER.createNameSpace("PAINTER.app.PainterConstants");

PAINTER.app.PainterConstants = (function () {
  class PainterConstants {}

  PainterConstants.PAINTER_TITLE = "Painter";
  PainterConstants.PAINTER_WIDTH = 600;
  PainterConstants.PAINTER_HEIGHT = 400;

  PainterConstants.LINE = Symbol("line");
  PainterConstants.RECTANGLE = Symbol("rectangle");
  PainterConstants.ELLIPSE = Symbol("ellipse");
  PainterConstants.FREE_PATH = Symbol("free_path");
  return PainterConstants;
})();
