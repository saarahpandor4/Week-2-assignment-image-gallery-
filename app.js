let images = [
  {
    src: "https://images.unsplash.com/photo-1725025423177-99fefad86afd?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "birds eye view of a beach",
    width: 300,
    height: 200,
  },
  {
    src: "https://images.unsplash.com/photo-1518978288375-f36cefcc992e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbWVsJTIwaW4lMjB0aGUlMjBkZXNlcnR8ZW58MHx8MHx8fDA%3D",
    alt: "A camel standing in the middle of the desert",
    width: 300,
    height: 200,
  },
  {
    src: "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "View of the northern lights with the mountains at the back",
    width: 300,
    height: 200,
  },
  {
    src: "https://images.unsplash.com/photo-1508690471604-cafd081190a1?q=80&w=1696&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A beautiful waterfall",
    width: 300,
    height: 200,
  },
];

console.log("testing");

let thumbnailContainer = document.getElementById("thumbnail-container");
let mainImageContainer = document.getElementById("main-image-container");

function createThumbnails() {
  for (let i = 0; i < images.length; i++) {
    let image = document.createElement("img");
    image.setAttribute("src", images[i].src);
    image.setAttribute("width", images[i].width);
    image.setAttribute("height", images[i].height);
    image.className = "thumbnail";
    thumbnailContainer.appendChild(image);
    console.dir(image);
    image.addEventListener("click", function () {
      currentIndex = i;
      createLargeImage(image);
    });
  }
}
createThumbnails();
{
}

function eventHandler() {
  thumbnail.addEventListener("keydown", function (event) {
    document.getElementById("announcer").textContent = image.alt;
    if (event.key === "Enter");
  });
}

function createLargeImage(image) {
  mainImageContainer.innerHTML = "";
  let largeImage = document.createElement("img");
  largeImage.src = image.src;
  largeImage.alt = image.alt;
  largeImage.width = image.width;
  largeImage.height = image.height;
  largeImage.className = "largeImage";
  mainImageContainer.appendChild(largeImage);
}
function selectNextImage(index) {
  currentImageIndex += index;

  if (currentImageIndex >= images.length) currentImageIndex = 0;
  if (currentImageIndex < 0) currentImageIndex = images.length - 1;
  console.log(currentImageIndex);
  updateDisplayImage(images[currentImageIndex]);
}
