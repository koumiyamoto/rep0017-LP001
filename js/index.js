"use strict";

(function () {
  const headerChangeAt = 170;
  const carouselHeight = 3000;
  const cuisineHeight = 3001;
  const cuisineHeightEnd = 6000;
  const parallaxSpeed = 0.5;
  const parallaxMargin = 600;

  $(window).on("scroll", function () {
    const dy = $(this).scrollTop();

    // スクロール量に応じてheaderの見た目を変化させる
    if (dy > headerChangeAt) {
      $(".header").addClass("smaller");
      $(".nav-item > a").removeClass("text-white").addClass("text-dark");
      $(".navbar-brand img").attr("src", "img/logo (1).png");
    } else {
      $(".header").removeClass("smaller");
      $(".nav-item > a").removeClass("text-dark").addClass("text-white");
      $(".navbar-brand img").attr("src", "img/logo (2).png");
    }

    // パララックス
    if (dy < carouselHeight) {
      $("#parallax-box1").css(
        "top",
        dy * parallaxSpeed - parallaxMargin + "px"
      );
      // console.log(dy);
      // console.log($("#parallax-box1").css("background-position"));
    }
    if (cuisineHeight > dy) {
      $("#parallax-box2").css("top", 2500 + "px");
      // console.log(dy);
      // console.log($("#parallax-box1").css("background-position"));
    }
    if (cuisineHeight < dy < cuisineHeightEnd) {
      $("#parallax-box2").css("top", dy * parallaxSpeed + 200 + "px");
      // console.log(dy);
      // console.log($("#parallax-box1").css("background-position"));
    }
  });
})();
