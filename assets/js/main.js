const images = [
  "assets/images/bubble.jpg",
  "assets/images/stufftable.jpeg",
  "assets/images/japan.jpg",
  "assets/images/landscape.jpeg",
];

let index = 0;

const img1 = document.getElementById("bgImage1");
const img2 = document.getElementById("bgImage2");

let activeImage = img1;
let inactiveImage = img2;

setInterval(() => {
  // prepare next image
  index = (index + 1) % images.length;
  inactiveImage.src = images[index];

  // crossfade
  inactiveImage.classList.add("bg-image--active");
  activeImage.classList.remove("bg-image--active");

  // swap references
  const temp = activeImage;
  activeImage = inactiveImage;
  inactiveImage = temp;
}, 10000);
