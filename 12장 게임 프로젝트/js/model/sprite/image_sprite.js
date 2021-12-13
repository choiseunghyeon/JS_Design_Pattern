GAME.createNameSpace("GAME.model.sprite.ImageSprite");

GAME.model.sprite.ImageSprite = (function () {
  let AbstractSprite = GAME.model.sprite.AbstractSprite;

  class ImageSprite extends AbstractSprite {
    constructor(imageName, spriteCount) {
      super();

      this.imageName = imageName;
      this.spriteCount = spriteCount;

      this.currentSpriteIndex = 0;
    }

    drawSprite(ctx) {
      let image = this.getImage();

      if (image) {
        let width = this.getWidth();
        let height = this.getHeight();

        let x = -1 * width * this.anchorX;
        let y = -1 * height * this.anchorY;

        ctx.drawImage(image, x, y);
      }
    }

    getHeight() {
      let image = this.getImage();

      if (image) {
        return image.height;
      }

      return 0;
    }

    getWidth() {
      let image = this.getImage();

      if (image) {
        return image.width;
      }

      return 0;
    }

    getImage() {
      let ImageRepository = GAME.controller.repository.ImageRepository;

      let imageRepository = ImageRepository.getInstance();

      let key = this.imageName + (this.currentSpriteIndex % this.spriteCount);
      let image = imageRepository.getImage(key);

      return image;
    }

    update(frameIndex) {
      this.currentSpriteIndex++;
    }
  }

  return ImageSprite;
})();
