let images = [
  {
    src: "https://images.unsplash.com/photo-1725025423177-99fefad86afd?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "birds eye view of a beach",
    width: 300,
    height: 200,
  },
  {
    src: "https://images.unsplash.com/photo-1518978288375-f36cefcc992e?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  {
    src: "https://images.unsplash.com/photo-1746083984990-ba2a8cabc88e?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "The galaxy",
    width: 300,
    height: 200,
  },
  {
    src: "https://images.unsplash.com/photo-1533907650686-70576141c030?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Flowers",
    width: 300,
    height: 200,
  },
  {
    src: "https://images.unsplash.com/photo-1514890084135-f16d926f4d03?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sunset at the beach",
    width: 300,
    height: 200,
  },
  {
    src: "https://images.unsplash.com/photo-1546882588-d9bd63f85a7e?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Stunning waterfall",
    width: 300,
    height: 200,
  },
  {
    src: "https://images.unsplash.com/photo-1558907685-9f38cd850e1e?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A herd of elephants by the trees",
    width: 300,
    height: 200,
  },
  {
    src: "https://images.unsplash.com/photo-1686922187957-4341c1f5484d?q=80&w=2183&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A river running through the forest with mountains in the distance",
    width: 700,
    height: 200,
  },
  {
    src: "https://images.unsplash.com/photo-1513415431848-a433b3de449f?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Underwater waterfall illusion",
    width: 300,
    height: 200,
  },
  {
    src: "https://images.unsplash.com/photo-1598472767213-4b64a946dd12?q=80&w=2953&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Leopard on the snow",
    width: 300,
    height: 200,
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Foggy mountain with a background sunrise",
    width: 300,
    height: 200,
  },
];

console.log("testing");
let currentIndex = 0;

let thumbnailContainer = document.getElementById("thumbnail-container");
let mainImageContainer = document.getElementById("main-image-container");
let nextBtn = document.getElementById("next-btn");
let prevBtn = document.getElementById("prev-btn");

function createThumbnails() {
  for (let i = 0; i < images.length; i++) {
    let image = document.createElement("img");
    image.setAttribute("src", images[i].src);
    image.setAttribute("width", images[i].width);
    image.setAttribute("height", images[i].height);
    image.className = "thumbnail";
    thumbnailContainer.appendChild(image);

    image.addEventListener("click", function () {
      currentIndex = i;
      setActiveThumbnail(i);
      createLargeImage(images[i]);
    });
  }
}
createThumbnails();
{
}

function setActiveThumbnail(index) {
  const thumbnails = document.querySelectorAll(".thumbnail");
  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle("active", i === index);
  });
}
setActiveThumbnail(currentIndex);
{
}

function createLargeImage(image) {
  mainImageContainer.innerHTML = "";
  let largeImage = document.createElement("img");
  largeImage.src = image.src;
  largeImage.alt = image.alt;

  largeImage.width = 850;
  largeImage.height = 480;
  largeImage.className = "largeImage";
  mainImageContainer.appendChild(largeImage);
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  createLargeImage(images[currentIndex]);
  setActiveThumbnail(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  createLargeImage(images[currentIndex]);
  setActiveThumbnail(currentIndex);
});

createLargeImage(images[currentIndex]);
