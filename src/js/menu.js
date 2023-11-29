/*DESKTOP HOVER*/
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
// $("#mobile-dropdown").hover(
//   function () {
//     $(this).find(".mobile-dropdown__wrapper").addClass("active-menu-mobile");
//   },
//   function () {
//     $(this).find(".mobile-dropdown__wrapper").removeClass("active-menu-mobile");
//   }
// );

// Установка изначальных стилей при загрузке страницы
$(document).ready(function () {
  var faAngleUp = $("#mobile-dropdown").find(".fa-angle-up");
  var faAngleDown = $("#mobile-dropdown").find(".fa-angle-down");

  faAngleUp.css("display", "none");
  faAngleDown.css("display", "inline");
});

// Обработчик клика
$("#mobile-dropdown").click(function () {
  var wrapper = $(this).find(".mobile-dropdown__wrapper");
  var faAngleUp = $(this).find(".fa-angle-up");
  var faAngleDown = $(this).find(".fa-angle-down");

  wrapper.toggleClass("active-menu-mobile");

  // Тоглим стили display для .fa-angle-up и .fa-angle-down
  if (wrapper.hasClass("active-menu-mobile")) {
    faAngleUp.css("display", "inline");
    faAngleDown.css("display", "none");
  } else {
    faAngleUp.css("display", "none");
    faAngleDown.css("display", "inline");
  }
});
