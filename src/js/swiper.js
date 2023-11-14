let scrollUp = document.querySelector('.scroll-up');


scrollUp.addEventListener("click", function () {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
})