(function () {
  'use strict';

  app.bindSlider = function () {
    $('.slider .owl-carousel').owlCarousel({
      loop: true,
      nav: true,
      dots: true,
      items: 1,
      navText: ['<i class="icon-arrow-left"/>', '<i class="icon-arrow-right"/>']
    });
  };

})();
