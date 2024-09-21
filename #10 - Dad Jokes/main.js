const joke = document.querySelector(".joke");
const changeButton = document.querySelector(".change");

generateJoke();

changeButton.addEventListener("click", generateJoke);

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  const res2 = 0;
  joke.innerHTML = data.joke;

  //   fetch("https://icanhazdadjoke.com", config) // promise 객체를 돌려줌 -> then으로 받기
  //     .then((res) => res.json())
  //     .then((data) => {
  //       joke.innerHTML = data.joke;
  //     });
}
