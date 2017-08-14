(function () {
  'use strict';

  app.bindSlider = function () {
    const $slider = $('.slider');

    $('.owl-carousel', $slider).owlCarousel({
      autoplay: true,
      loop: true,
      nav: true,
      dots: true,
      items: 1,
      navText: ['<i class="icon-arrow-left"/>', '<i class="icon-arrow-right"/>']
    });
  };

})();
