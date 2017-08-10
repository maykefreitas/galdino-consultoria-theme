(function () {
  'use strict';

  app.bindPartners = function () {
    const $slider = $('.partners-slider');

    $('.owl-carousel', $slider).owlCarousel({
      loop: true,
      nav: true,
      dots: true,
      margin: 30,
      navText: ['<i class="icon-arrow-left"/>', '<i class="icon-arrow-right"/>'],
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 4
        },
        768: {
          items: 6
        }
      }
    });
  };

})();
