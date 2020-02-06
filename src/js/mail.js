$(document).ready(function() {
  // form validation
  var $email = $('#contact__email');
  var $subject = $('#contact__subject');
  var $message = $('#contact__message');

  function validateEmail(email) {
    // eslint-disable-next-line no-useless-escape
    var $pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return $pattern.test(email);
  }

  $email.blur(function() {
    var $emailVal = $('#contact__email').val();
    if (validateEmail($emailVal)) {
      $('.contact__email').removeClass('input-error');
    } else {
      $('.contact__email').addClass('input-error');
    }
  });
  $subject.blur(function() {
    if ($(this).val() === '') {
      $('.contact__subject').addClass('input-error');
    } else {
      $('.contact__subject').removeClass('input-error');
    }
  });
  $message.blur(function() {
    if ($(this).val() === '') {
      $('.contact__message').addClass('input-error');
    } else {
      $('.contact__message').removeClass('input-error');
    }
  });

  $('#contact__submit').prop('disabled', true);
  $('#contact__email, #contact__subject, #contact__message').on(
    'input',
    function() {
      var $emailVal = $('#contact__email').val();
      if (
        validateEmail($emailVal) &&
        $('#contact__subject').val() !== '' &&
        $('#contact__message').val() !== ''
      ) {
        $('#contact__submit').prop('disabled', false);
      } else {
        $('#contact__submit').prop('disabled', true);
      }
    }
  );

  $('.contact__form').submit(function(e) {
    var $postdata = $('.contact__form').serialize();
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'https://unam-project.herokuapp.com/',
      data: $postdata,
      dataType: 'json',
      success: function(json) {
        if (
          json.emailMessage === '' &&
          json.subjectMessage === '' &&
          json.messageMessage === ''
        ) {
          $('.contact__contact-details').css({ display: 'none' });
          $('.contact__form').fadeOut(function() {
            if (window.innerWidth >= 940) {
              $('html, body').animate({
                scrollTop: $('#contact__top').offset().top - 63
              });
            } else {
              window.location.href = '#contact__top';
            }
            // pl/en aftersubmit version
            if ($("input[type='submit']").val() === 'Please wait...') {
              $('.contact__form-box').append(
                '<p class="contact__aftersubmit">Message was sent.</p><div class="contact__loader"></div>'
              );
            } else {
              $('.contact__form-box').append(
                '<p class="contact__aftersubmit">Wiadomość została wysłana.</p><div class="contact__loader"></div>'
              );
            }
            setTimeout(function() {
              location.reload();
              $('.contact__input').val('');
              $('.contact__textarea').val('');
              if (window.innerWidth >= 940) {
                $('html, body').animate({
                  scrollTop: $('#contact__top').offset().top - 63
                });
              } else {
                window.location.href = '#contact__top';
              }
            }, 3000);
          });
        }
      }
    });
  });

  // pl/en button version
  $('form.contact__form').submit(function() {
    if ($("input[type='submit']").val() === 'Wyślij') {
      $("input[type='submit']")
        .attr('disabled', true)
        .val('Proszę czekać...');
      setTimeout(function() {
        $("input[type='submit']")
          .attr('disabled', false)
          .val('Wyślij');
      }, 2000); // after 2s enabled
    } else {
      $("input[type='submit']")
        .attr('disabled', true)
        .val('Please wait...');
      setTimeout(function() {
        $("input[type='submit']")
          .attr('disabled', false)
          .val('Send');
      }, 2000);
    }
  });
});
