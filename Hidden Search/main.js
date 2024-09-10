const input = document.querySelector(".input");
const button = document.querySelector(".search");

let search = false;

button.addEventListener("click", () => {
  if (search === true) {
    input.style.display = "none";
    search = false;
  } else {
    input.style.display = "block";
    search = true;
  }
});
