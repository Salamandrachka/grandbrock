/*BURGER*/
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
