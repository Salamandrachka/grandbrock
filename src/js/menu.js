/*MENU HOVER*/
// Додаємо клас "active-menu" при наведенні
$(".nav-menu__item").hover(
  function () {
    $(this).find(".nav-dropdown").addClass("active-menu");
  },
  function () {
    $(this).find(".nav-dropdown").removeClass("active-menu");
  }
);

/*MOBILE HOVER*/
$(".nav-mobile__item").hover(
  function () {
    $(this).find(".mobile-dropdown__wrapper").addClass("active-menu-mobile ");
  },
  function () {
    $(this).find(".mobile-dropdown__wrapper").removeClass("active-menu-mobile");
  }
);
