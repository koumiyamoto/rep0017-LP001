"use strict";

(function () {
  const headerChangeAt = 170;

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > headerChangeAt) {
      $(".header").addClass("smaller");
      $(".nav-item > a").removeClass("text-white").addClass("text-dark");
      $(".navbar-brand img").attr("src", "img/logo (1).png");
    } else {
      $(".header").removeClass("smaller");
      $(".nav-item > a").removeClass("text-dark").addClass("text-white");
      $(".navbar-brand img").attr("src", "img/logo (2).png");
    }
  });
})();
