PAINTER.createNameSpace("PAINTER.controller.observer.IPainterSubject");

PAINTER.controller.observer.IPainterSubject = (function () {
  class IPainterSubject {
    notifyObservers() {
      throw new Error("implement this method");
    }

    registerObserver(observer) {
      throw new Error("implement this method");
    }

    removeObserver(observer) {
      throw new Error("implement this method");
    }
  }
  return IPainterSubject;
})();
