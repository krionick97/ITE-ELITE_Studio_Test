const sliderLinks = document.querySelectorAll('.slider-link');

/* Mobile Menu */
document.addEventListener('DOMContentLoaded', () => {
  new Mmenu('#my-menu', {
    // options
    navbar: {
      title: 'Основное меню сайта'
    }
  }, {
    // configurations
    className: {
      selected: 'active'
    },
  });

}); // End of MMenu settings

/* Owl-Carousel */
$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    dotsContainer: '#carousel-custom-dots',
    // dotsEach: true,
    // dotsData: true,
    responsive: {
      0: {
        items: 1
      }
    }
  });

  const owl = $('.owl-carousel');
  owl.owlCarousel();
  // Go to the next item
  $('.customNextBtn').click(function() {
      owl.trigger('next.owl.carousel');
  });
  // Go to the previous item
  $('.customPrevBtn').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl.trigger('prev.owl.carousel', [300]);
  });
  $('.owl-dot').click(function () {
    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
  });
});
