(function () {
  'use strict';

  app.bindPartners = function () {
    if (window.innerWidth < 768) {
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
            items: 2
          },
          560: {
            items: 3
          },
          690: {
            items: 4
          }
        }
      });
    }
  };

})();
