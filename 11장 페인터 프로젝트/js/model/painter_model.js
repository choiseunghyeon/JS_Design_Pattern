PAINTER.createNameSpace("PAINTER.model.PainterModel");

PAINTER.model.PainterModel = (function () {
  let IPainterSubject = PAINTER.controller.observer.IPainterSubject;
  class PainterModel extends IPainterSubject {
    constructor() {
      super();

      let LinePieceManager = PAINTER.controller.manager.LinePieceManager;

      this.pieces = [];
      this.observers = [];

      this.pieceManager = new LinePieceManager();
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

    getPieceManager() {
      return this.pieceManager;
    }

    setPieceManager(pieceManager) {
      this.pieceManager = pieceManager;
    }
  }
  return PainterModel;
})();
