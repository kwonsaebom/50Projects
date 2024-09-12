const left = document.querySelector(".container.left");
const right = document.querySelector(".container.right");

left.addEventListener("mouseenter", () => left.classList.add("hover"));
left.addEventListener("mouseleave", () => left.classList.remove("hover"));

right.addEventListener("mouseenter", () => right.classList.add("hover"));
right.addEventListener("mouseleave", () => right.classList.remove("hover"));
