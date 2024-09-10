const progress = document.querySelector(".progress-container");

const prev = document.querySelector(".button.prev");
const next = document.querySelector(".button.next");

const steps = document.querySelectorAll(".step");

let currentActive = 1;

next.addEventListener("click", () => {
  if (currentActive >= steps.length) {
    return;
  }

  currentActive++;
  console.log(currentActive);

  update();
});

prev.addEventListener("click", () => {
  if (currentActive <= 1) {
    currentActive = 1;
  }

  currentActive--;
  console.log(currentActive);

  update();
});

function update() {
  steps.forEach((step, idx) => {
    if (idx < currentActive) {
      console.log("idx++" + idx);
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === steps.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
