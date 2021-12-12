PAINTER.createNameSpace("PAINTER.model.PainterModel");

PAINTER.model.PainterModel = (function () {
  let IPainterSubject = PAINTER.controller.observer.IPainterSubject;
  class PainterModel extends IPainterSubject {
    constructor() {
      super();

      this.pieces = [];
      this.observers = [];

      let LineState = PAINTER.controller.state.LineState;
      this.state = LineState.getInstance();

      this.strokeWidth = 10;
      this.strokeColor = "red";
      this.fillColor = "blue";
    }

    drawPieces(ctx) {
      for (const piece of this.pieces) {
        piece.draw(ctx);
      }
    }

    addPiece(piece) {
      this.pieces.push(piece);

      this.notifyObservers();
    }

    getPieces() {
      return this.pieces;
    }

    notifyObservers() {
      for (const observer of this.observers) {
        observer.update();
      }
    }

    registerObserver(observer) {
      this.observers.push(observer);
    }

    removeObserver(observer) {
      let index = this.observers.indexOf(observer);
      if (index >= 0) {
        this.observers.splice(index, 1);
      }
    }

    getState() {
      return this.state;
    }

    setState(state) {
      this.state = state;
    }

    getStrokeWidth() {
      return this.strokeWidth;
    }
    setStrokeWidth(strokeWidth) {
      this.strokeWidth = strokeWidth;
    }

    getStrokeColor() {
      return this.strokeColor;
    }
    setStrokeColor(strokeColor) {
      this.strokeColor = strokeColor;
    }
    getFillColor() {
      return this.fillColor;
    }
    setFillColor(fillColor) {
      this.fillColor = fillColor;
    }
  }
  return PainterModel;
})();
