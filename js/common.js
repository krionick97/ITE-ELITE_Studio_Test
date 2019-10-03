'use strict'
jQuery.event.special.touchstart = {
  setup: function( _, ns, handle ){
    if ( ns.includes("noPreventDefault") ) {
      this.addEventListener("touchstart", handle, { passive: false });
    } else {
      this.addEventListener("touchstart", handle, { passive: true });
    }
  }
};

/* Mobile Menu */
document.addEventListener('DOMContentLoaded', function() {
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

$(document).ready(function() {
  /* Feedback Form */
  const callFeedback = document.querySelector('.main__menu-feedback');
  const closeFeedback = document.querySelector('.form-feedback__close');
  const feedback = document.querySelector('.form-feedback');
  const feedbackBackground = document.querySelector('.form-feedback__background');
  // const feedbackForm = document.forms.feedbackForm;
  // const inputEmail = feedbackForm.email;
  // const inputTel = feedbackForm.tel;
  // const inputText = feedbackForm.text;

  /* Open Feedback */
  callFeedback.addEventListener('click', function() {
    feedback.style.display = 'flex';
    document.querySelector('.form-feedback__background').style.display = 'block';
  });

  /* Close Feedback */
  closeFeedback.addEventListener('click', function() {
    feedback.style.display = 'none';
    feedbackBackground.style.display = 'none';
  });
  window.addEventListener('click', function(event) {
    const clickMouse = event.target;
    if(clickMouse === feedbackBackground) {      
      feedback.style.display = 'none';
      feedbackBackground.style.display = 'none';
    } else { return; }
  });

  /* Owl-Carousel */
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    // autoWidth: true,
    dotsContainer: '#carousel-custom-dots',
    items: 1
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

  // Mask of the phone
  $(function($) {
    $('[name="tel"]').mask("+7 (999) 999-99-99");
  });

  /* Send Form-data from Feedback */
  $('form').submit(function(event) {
    event.preventDefault();
    let formID = $(this).attr('id');
    let formNm = $('#' + formID);

    $.ajax({
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: formNm.serialize(),
      contentType: false,
      cache: false,
      processData: false,
      success: function() {
        // $(formNm).html(data);
        $('form').trigger('reset');
        $('.form-feedback__popup').css('display', 'block');
      }
    });
    return false;
  });

  document.querySelector('.form-feedback__popup-btn').addEventListener('click', function() {
    document.querySelector('.form-feedback__popup').style.display = 'none';
    document.querySelector('.form-feedback').style.display = 'none';
    document.querySelector('.form-feedback__background').style.display = 'none';
  });

});
