PAINTER.createNameSpace("PAINTER.controller.observer.IPainterObserver");

PAINTER.controller.observer.IPainterObserver = (function () {
  class IPainterObserver {
    update() {
      throw new Error("implement this method");
    }
  }

  return IPainterObserver;
})();
