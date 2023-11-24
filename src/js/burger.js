// let menuBtn = document.querySelector(".hamburger");
// let body = document.querySelector(".body");
// let menu = document.querySelector(".nav-mobile__wrapper");
// let menuItem = document.querySelectorAll(".nav-mobile__link");

// menuBtn.addEventListener("click", function () {
//   menuBtn.classList.toggle("active");
//   menu.classList.toggle("active");
//   body.classList.toggle("menu-active");
// });

// menuItem.forEach(function (menuItem) {
//   menuItem.addEventListener("click", function () {
//     menuBtn.classList.toggle("active");
//     menu.classList.toggle("active");
//     body.classList.toggle("menu-active");
//   });
// });


let $menuBtn = $(".hamburger");
let $body = $(".body");
let $menu = $(".nav-mobile__wrapper");
let $menuItem = $(
  ".nav-mobile__link, .mobile-dropdown__link, .mobile-dropdown-sub__link"
);

$menuBtn.on("click", function () {
  $menuBtn.toggleClass("active");
  $menu.toggleClass("active");
  $body.toggleClass("menu-active");
});

$menuItem.on("click", function () {
  $menuBtn.toggleClass("active");
  $menu.toggleClass("active");
  $body.toggleClass("menu-active");
});   

// Додаємо клас "active-menu" при наведенні
$(".nav-menu__item").hover(
  function () {
    $(this).find(".nav-dropdown").addClass("active-menu");
  },
  function () {
    $(this).find(".nav-dropdown").removeClass("active-menu");
  }
);


$(".nav-mobile__item").hover(
  function () {
    $(this).find(".mobile-dropdown__wrapper").addClass("active-menu-mobile ");
  },
  function () {
    $(this)
      .find(".mobile-dropdown__wrapper").removeClass("active-menu-mobile");
  }
);

// $(".nav-mobile__item").click(function () {
//   $(this).find(".mobile-dropdown__wrapper").toggleClass("active-menu-mobile");
// });



$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $(".header").addClass("active-header");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".header").removeClass("active-header");
  }
});