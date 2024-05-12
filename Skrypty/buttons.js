const goUpButton = document.getElementById("go-up-button");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    goUpButton.classList.add("show");
  } else {
    goUpButton.classList.remove("show");
  }
});

goUpButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});