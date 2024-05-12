const hamMenu = document.querySelector(".hamburger-button");
const offScreenMenu = document.querySelector(".hamburger-menu");
const body = document.querySelector("body");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  body.classList.toggle("no-scroll");
});

body.addEventListener("click", (event) => {
  if (!offScreenMenu.contains(event.target) &&!hamMenu.contains(event.target)) {
    hamMenu.classList.remove("active");
    offScreenMenu.classList.remove("active");
    body.classList.remove("no-scroll");
  }
});