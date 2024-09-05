const imageContainers = document.querySelectorAll(".image-container");

console.log(imageContainers);

imageContainers.forEach((imageContainer) => {
  imageContainer.addEventListener("click", () => {
    removeActiveClass();
    imageContainer.classList.add("active");
  });
});

function removeActiveClass() {
  imageContainers.forEach((imageContainer) => {
    imageContainer.classList.remove("active");
  });
}
