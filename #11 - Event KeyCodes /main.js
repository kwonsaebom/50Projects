let container = document.querySelector(".container");

window.addEventListener("keydown", (event) => {
  container.innerHTML = `
    <h1 class="title key">${event.key === " " ? "Space" : event.key}</h1>
    <h1 class="title keyCode">${event.keyCode}</h1>
    <h1 class="title code">${event.code}</h1>`;
});
