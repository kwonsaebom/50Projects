const boxes = document.querySelectorAll("box");

window.addEventListener("scroll", checkBoxes);
boxes.forEach((box) => {
  box.classList.add("show");
  console.log(box);
});
