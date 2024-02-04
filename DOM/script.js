const cartAnimation = {
  zoom: true,

  onHover() {
    const targetImage = document.querySelector(".images");
    let images = document.querySelectorAll(".images > img");

    if (targetImage) {
      targetImage.addEventListener("mouseenter", () => {
        this.zoom = true;
        images.forEach((img, index) => {
          img.style.animationName = `hoverOn${index + 1}`;
          img.style.animationDirection = "normal";
          img.style.animationPlayState = "running";
        });
      });

      targetImage.addEventListener("animationend", this.enlargeFirstImage);
      targetImage.addEventListener("mouseleave", this.reverseAnimation);
    }
  },

  enlargeFirstImage(e) {
    // const currentImage = e.target.closest('img');
    const currentImage = document.querySelector(".images > img:last-child");
    if (currentImage && cartAnimation.zoom) {
      currentImage.style.transition = "transform 0.5s";
      currentImage.style.transform = "scale(1.2)";
    }
  },

  reverseAnimation() {
    let images = document.querySelectorAll(".images > img");
    images.forEach((img, index) => {
      img.style.animationName = `hoverOn${index + 1}-reverse`;
      img.style.animationDirection = "normal";
      img.style.transform = "scale(1)";
      img.style.animationPlayState = "running";
    });

    cartAnimation.zoom = false;
  },
};

cartAnimation.onHover();
