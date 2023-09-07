let menuBtn = document.querySelector(".hamburger");
let body = document.body;
let menu = document.querySelector(".nav-mobile__wrapper");
let menuItem = document.querySelectorAll(".nav-mobile__link");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.add("menu-active");
});

menuItem.forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.remove("menu-active"); 
  });
});


