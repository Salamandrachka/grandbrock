let scrollUp = document.querySelector('.scroll-up');


scrollUp.addEventListener("click", function () {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
})

// let $scrollUp = $(".scroll-up");

// $scrollUp.on("click", function () {
//   $("html, body").animate(
//     { scrollTop: 0 },
//     { duration: 800, easing: "swing", queue: false }
//   );
// });