const labels = document.querySelectorAll(".input-container");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .spit("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`
    )
    .join("");
});
