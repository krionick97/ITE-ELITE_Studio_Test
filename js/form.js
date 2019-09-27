
$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();

    $.ajax({
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: new FormData(this),
      contentType: false,
      cache: false,
      processData: false,
      success: function() {
        $('#form').trigger('reset');
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