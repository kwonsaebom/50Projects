const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const button = document.createElement("button");

  button.classList.add("items");
  button.innerText = sound;

  button.addEventListener("click", () => {
    stopSongs();
    document.getElementById(sound).play();
  });

  const container = document.getElementById("container");
  container.appendChild(button);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
