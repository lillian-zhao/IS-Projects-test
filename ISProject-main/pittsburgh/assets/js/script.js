$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 10,
    nav: true,
    dots: false,
    responsiveClass: true,
    loop: true,
    navText: [
      "<i class='fa fa-arrow-circle-left' aria-hidden='true'></i>",
      "<i class='fa fa-arrow-circle-right' aria-hidden='true'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      768: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
      },
    },
  });
  // Set equal height for all .sliderWrapper elements
  var maxHeight = 0;
  $(".owl-carousel .sliderWrapper").each(function () {
    var height = $(this).height();
    if (height > maxHeight) {
      maxHeight = height;
    }
  });
  $(".owl-carousel .sliderWrapper").height(maxHeight);
});

