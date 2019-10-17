$(document).ready(function () {

  // form validation
  $('.contact__input, .contact__textarea').on('focus', function () {
    $('.contact__input, .contact__textarea').removeClass('input-error');
  });
  $('.contact__form').submit(function (e) {
    e.preventDefault();
    $('.contact__input, .contact__textarea').removeClass('input-error');
    var postdata = $('.contact__form').serialize();
    $.ajax({
      type: 'POST',
      url: 'contact.php',
      data: postdata,
      dataType: 'json',
      success: function (json) {
        if (json.emailMessage != '') {
          $('.contact__email').addClass('input-error');
        }
        if (json.subjectMessage != '') {
          $('.contact__subject').addClass('input-error');
        }
        if (json.messageMessage != '') {
          $('.contact__message').addClass('input-error');
        }
        if (json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '') {
          $('.contact__form').fadeOut('fast', function () {
            $('.contact__form-box').append('<p class="contact__aftersubmit">Wiadomość została wysłana.</p><div class="contact__loader"></div>');
            $('.contact__input').val(''); // input reset after submit
            $('.contact__textarea').val(''); // textarea reset after submit
            setTimeout(function () { // return to form after submit (after 3s)
              location.href = './contact.html'
            }, 3000);
          });
        }
      }
    });
  });

  // submit disabled/enabled 
  $('#contact__submit').prop('disabled', true);

  $('#contact__email, #contact__subject, #contact__message').keyup(function () {
    if ($('#contact__email').val() != '' && $('#contact__subject').val() != '' && $('#contact__message').val() != '') {
      $('#contact__submit').prop('disabled', false);
    } else {
      $('#contact__submit').prop('disabled', true);
    }
  });

  $('form.contact__form').submit(function () {
    $("input[type='submit']").attr('disabled', true).val('Proszę czekać...');
    setTimeout(function () {
      $("input[type='submit']").attr('disabled', false).val('Wyślij')
    }, 2000); // after 2s enabled
  })
});
