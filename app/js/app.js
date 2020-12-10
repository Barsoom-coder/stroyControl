import $ from "jquery";
window.jQuery = $;
window.$ = $; // import module example (npm i -D jquery)
// require('./other_script.js') // Require Other Script(s) from app/js folder Example
import slick from "slick-carousel";
import magnificPopup from "magnific-popup";

document.addEventListener("DOMContentLoaded", () => {
  $(".choice__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    arrows: false,
    dots: true,
    customPaging: function (slider, i) {
      return '<img src="../img/dest/choice/slide-dot.png" /><img src="../img/dest/choice/slide-dot-active.png" />';
    },
  });

  $("input#hamburger").change(function () {
    if ($(this).is(":checked")) {
      $(".hamburger").addClass("hamburger--active");
      $(".drawer-list").addClass("drawer-list--active");
      $("body").addClass("fixedPosition");
    } else {
      $(this).prop("disabled", false);
      $(".hamburger").removeClass("hamburger--active");
      $("body").removeClass("fixedPosition");
      $(".drawer-list").removeClass("drawer-list--active");
    }
  });

  $(".scrolled").click(function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1000);
  });

  $(".menu__item--mobile").click(function (e) {
    $("input#hamburger").prop("checked", false);
    $(".drawer-list").toggleClass("drawer-list--active");
    $("body").toggleClass("fixedPosition");
    $(".hamburger").removeClass("hamburger--active");
  });

  $(".scroll-up__link").bind("click", function (e) {
    var anchor = $(this);
    if (anchor.attr("href") == "#to-the-top") {
      var scroll_value = 0;
    } else {
      var scroll_value = $(anchor.attr("href")).offset().top;
    }
    $("html, body").stop().animate(
      {
        scrollTop: scroll_value,
      },
      1000
    );
    e.preventDefault();
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scroll-up").fadeIn();
    } else {
      $(".scroll-up").fadeOut();
    }
  });
});

// $('.open-popup-link').magnificPopup({
//   type:'inline',
//   midClick: true,
// });

$(".inline-popup").magnificPopup({
  delegate: "a",
  removalDelay: 500, //delay removal by X to allow out-animation
  callbacks: {
    beforeOpen: function () {
      this.st.mainClass = this.st.el.attr("data-effect");
    },
  },
  midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});
