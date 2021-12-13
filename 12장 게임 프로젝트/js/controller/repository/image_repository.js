GAME.createNameSpace("GAME.controller.repository.ImageRepository");

GAME.controller.repository.ImageRepository = (function () {
  class ImageRepository {
    constructor() {
      this.images = [];
      this.imageInfos = [];
      this.imagesLoaded = 0;
      this.imagesFailedToLoad = 0;
      this.imagesIndex = 0;

      if (ImageRepository._instance) {
        return ImageRepository._instance;
      }

      ImageRepository._instance = this;
    }

    static getInstance() {
      if (!ImageRepository._instance) {
        ImageRepository._instance = new ImageRepository();
      }

      return ImageRepository._instance;
    }

    imageLoadedCallback(e) {
      this.imagesLoaded++;
    }

    imageLoadErrorCallback(e) {
      this.imagesFailedToLoad++;
    }

    loadImage(imageUrl, name, index) {
      let image = new Image();
      let self = this;

      image.src = imageUrl;

      image.addEventListener("load", function (e) {
        self.imageLoadedCallback(e);
      });

      image.addEventListener("error", function (e) {
        self.imageLoadErrorCallback(e);
      });

      let key = name + index;

      this.images[key] = image;
    }

    loadImages() {
      let IMAGE_RESOURCE_DIR = GAME.app.GameConstants.IMAGE_RESOURCE_DIR;

      let playerImageInfo = this.imageInfos[0];

      if (this.imagesIndex < playerImageInfo.count) {
        let imageUrl = IMAGE_RESOURCE_DIR + "/" + playerImageInfo.name + "_" + this.imagesIndex + ".png";
        this.loadImage(imageUrl, playerImageInfo.name, this.imagesIndex);
        this.imagesIndex++;
      }

      return ((this.imagesLoaded + this.imagesFailedToLoad) / playerImageInfo.count) * 100;
    }

    queryImageInfo(imageInfo) {
      this.imageInfos.push(imageInfo);
    }

    getImage(key) {
      return this.images[key];
    }
  }
  return ImageRepository;
})();
