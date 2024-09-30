const inputNode = document.querySelector("#input");
const tagContainerNode = document.querySelector("#tag-container");

inputNode.addEventListener("keyup", (e) => {
  createTag(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelect();
  }
});

function createTag(sentence) {
  let tags = [];

  if (sentence.indexOf(",") > 0) {
    tags = sentence.split(",");
  } else {
    tags = [];
    tags[0] = input.value;
  }

  tags = tags.filter((tag) => tag.trim() !== "");

  console.log(tags);

  tagContainerNode.innerHTML = "";

  tags.forEach((tag) => {
    let tagNode = document.createElement("span");
    tagNode.textContent = tag;
    tagNode.classList.add("tag");
    tagContainerNode.appendChild(tagNode);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    if (randomTag !== undefined) {
      highlightTag(randomTag);

      setTimeout(() => {
        unHighlightTag(randomTag);
      }, 100);
    }
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("pick");
}

function unHighlightTag(tag) {
  tag.classList.remove("pick");
}
