const jokes = ["A", "B", "C", "D", "E"];
const changeButton = document.querySelector(".change");
const joke = document.querySelector(".joke");

changeButton.addEventListener("click", () => {
  let randIdx = Math.floor(Math.random() * jokes.length);

  console.log(randIdx);
  console.log(jokes[randIdx]);
  console.log(joke);
  joke.innerText = jokes[randIdx];
});
