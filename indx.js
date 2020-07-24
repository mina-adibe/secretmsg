const { hash } = window.location;
let msg = atob(hash.replace("#", ""));
if (msg) {
  document.getElementById("msg-form").classList.add("hide");
  document.getElementById("message-show").classList.remove("hide");
  document.getElementById("msgtext").innerHTML = msg;
}

let form = document.querySelector("form");
let cardInput = document.getElementsByClassName("card-input");
let input = document.getElementById("msg-input");
let linkInput = document.getElementById("link-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector("#msg-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");

  let encrypted = btoa(input.value);
  linkInput.value = `${window.location}#${encrypted}`;

  linkInput.select();
});
