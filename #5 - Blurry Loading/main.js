const container = document.querySelector(".container");
const loading = document.querySelector(".loading");

let load = 0;

let time = setInterval(blurring, 30);

function blurring() {
  load++;
  console.log(load);

  if (load > 99) {
    clearInterval(time);
  }

  loading.innerText = `${load}%`;
  loading.style.opacity = scale(load, 0, 100, 1, 0);

  container.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
