const formNode = document.querySelector(".form-container");
const loginButton = document.querySelector(".login");

const emailNode = document.querySelector("#email");
const pwNode = document.querySelector("#password");

const email = emailNode.value;
const pw = pwNode.value;

loginButton.addEventListener("submit", () => {
  if (email.trim().length === 0) {
    alert();
  }
});
