/*ATTACHED HEADER*/
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $(".header").addClass("attached-header");
  } else {
    $(".header").removeClass("attached-header");
  }
});