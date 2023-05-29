// Select all the <img> elements with the "data-src" attribute
let imagesToLoad = document.querySelectorAll("img[data-src]");

// Define a function to load the images
const loadImages = (image) => {
  // Set the "src" attribute of the image to the value of the "data-src" attribute
  image.setAttribute("src", image.getAttribute("data-src"));

  // When the image is loaded, remove the "data-src" attribute
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

// Iterate over each image to load
imagesToLoad.forEach((img) => {
  // Call the loadImages function for each image
  loadImages(img);
});
