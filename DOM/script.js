const cartAnimation = {
  zoom: true,
  images: [
    {
      ID: 1,
      title: "Porsche",
      url: "images/car4.jpg",
    },
    {
      ID: 2,
      title: "Ferrari",
      url: "images/car3.jpg",
    },
    {
      ID: 3,
      title: "Bentely",
      url: "images/car2.jpg",
    },
    {
      ID: 4,
      title: "Mustang",
      url: "images/car1.jpg",
    },
  ],

  appendImages() {
    const imageContainer = document.querySelector(".images");
    let totalImages = this.images.length;

    for (let i = 0; i < totalImages; i++) {
      let imageBox = document.createElement("div");
      imageBox.className = "imageBox";

      let imgElement = document.createElement("img");
      imgElement.src = this.images[i].url;

      let h2 = document.createElement("h2");
      h2.innerHTML = this.images[i].title;

      imageContainer.appendChild(imageBox);
      imageBox.appendChild(imgElement);
      imageBox.appendChild(h2);
    }

    this.onHover();
  },

  onHover() {
    const targetImage = document.querySelector(".images");
    let images = document.querySelectorAll(".images > .imageBox");

    if (targetImage) {
      targetImage.addEventListener("mouseenter", () => {
        cartAnimation.zoom = true;
        images.forEach((img, index) => {
          img.style.animationName = `hoverOn${index + 1}`;
          img.style.animationDirection = "normal";
          img.style.animationPlayState = "running";
        });
      });

      targetImage.addEventListener(
        "animationend",
        cartAnimation.enlargeFirstImage
      );
      targetImage.addEventListener(
        "mouseleave",
        cartAnimation.reverseAnimation
      );
    }
  },

  enlargeFirstImage(e) {
    // const currentImage = e.target.closest('img');
    let imgCount = cartAnimation.images.length;
    let currentImage = document.querySelector(
      `.images > .imageBox:nth-child(${imgCount})`
    );

    // const currentImage = document.querySelector(
    //   ".images > .imageBox:last-child"
    // );
    if (currentImage && cartAnimation.zoom) {
      currentImage.style.transition = "transform 0.5s";
      currentImage.style.transform = "rotate(0deg) scale(1.2)";
      currentImage.querySelector("h2").style.display = "flex";
    }
  },

  reverseAnimation() {
    let images = document.querySelectorAll(".images > .imageBox");

    images.forEach((img, index) => {
      img.style.animationName = `hoverOn${index + 1}-reverse`;
      img.style.animationDirection = "normal";
      img.style.transform = "scale(1)";
      img.style.animationPlayState = "running";
      img.querySelector("h2").style.display = "none";
    });

    cartAnimation.zoom = false;
  },
};
cartAnimation.appendImages();
