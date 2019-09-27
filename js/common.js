'use strict'

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

$(document).ready(function() {
  /* Feedback Form */
  const callFeedback = document.querySelector('.main__menu-feedback');
  const closeFeedback = document.querySelector('.form-feedback__close');
  const feedback = document.querySelector('.form-feedback');
  const feedbackBackground = document.querySelector('.form-feedback__background');
  const feedbackForm = document.forms.feedbackForm;
  // const inputEmail = feedbackForm.email;
  // const inputTel = feedbackForm.tel;
  // const inputText = feedbackForm.text;

  /* Open Feedback */
  callFeedback.addEventListener('click', () => {
    feedback.style.display = 'flex';
    document.querySelector('.form-feedback__background').style.display = 'block';
  });

  /* Close Feedback */
  closeFeedback.addEventListener('click', () => {
    feedback.style.display = 'none';
    feedbackBackground.style.display = 'none';
  });
  window.addEventListener('click', (event) => {
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
    margin: 0,
    dotsContainer: '#carousel-custom-dots',
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

  // Mask of the phone
  $(function($) {
    $('[name="tel"]').mask("+7 (999) 999-99-99");
  });

  /* Send Form-data from Feedback */
  // feedbackForm.addEventListener('submit', (event) => {
  //   event.preventDefault();
  //   const url = 'C:/MAMP/htdocs/php-study/mail/mail.php'
  //   let email = inputEmail.value;
  //   let tel = inputTel.value;
  //   let text = inputText.value;

  //   let user = {
  //     email: email,
  //     phoneNumber: tel,
  //     message: text
  //   }

  //   let userJSON = JSON.stringify(user);

  //   if (email === '') {
  //     alert('Введите адрес e-mail');
  //   }
  //   if(tel === '') {
  //     alert('Введите телефонный номер');
  //   }

  //   fetch('url', {
  //     method: POST,
  //     body: userJSON
  //   });

  //   feedbackForm.reset();

  // });

});
