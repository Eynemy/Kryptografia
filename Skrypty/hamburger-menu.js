const hamMenu = document.querySelector(".hamburger-button");
const offScreenMenu = document.querySelector(".hamburger-menu");
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});