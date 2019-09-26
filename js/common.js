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