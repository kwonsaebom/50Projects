const input = document.querySelector(".input");
const button = document.querySelector(".search");
const container = document.querySelector(".container");

let search = false;
button.addEventListener("click", () => {
  if (search === true) {
    container.classList.remove("active");
    search = false;
  } else {
    container.classList.add("active");
    search = true;
  }
});
