$(document).ready(function() {

  //===== SUBMIT DISABLED/ENABLED =====
  $('#_submit').prop('disabled', true);

  $('#contact-email, #contact-subject, #contact-message').keyup(function() {
    if ($('#contact-email').val() != '' && $('#contact-subject').val() != '' && $('#contact-message').val() != '') {
      $('#_submit').prop('disabled', false);
    } else {
      $('#_submit').prop('disabled', true);
    }
  });

  $("form").submit(function() {
    $("input[type='submit']").attr("disabled", true).val("Proszę czekać...");
    setTimeout(function() {
      $("input[type='submit']").attr("disabled", false).val("Wyślij")
    }, 2000); // << AFTER 2s ENABLED
  })

  //===== FORM VALIDATION =====
  $('.contact-form form input[type="text"], .contact-form form textarea').on('focus', function() {
    $('.contact-form form input[type="text"], .contact-form form textarea').removeClass('input-error');
  });
  $('.contact-form form').submit(function(e) {
    e.preventDefault();
    $('.contact-form form input[type="text"], .contact-form form textarea').removeClass('input-error');
    var postdata = $('.contact-form form').serialize();
    $.ajax({
      type: 'POST',
      url: 'contact.php',
      data: postdata,
      dataType: 'json',
      success: function(json) {
        if (json.emailMessage != '') {
          $('.contact-form form .contact-email').addClass('input-error');
        }
        if (json.subjectMessage != '') {
          $('.contact-form form .contact-subject').addClass('input-error');
        }
        if (json.messageMessage != '') {
          $('.contact-form form textarea').addClass('input-error');
        }
        if (json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '') {
          $('.contact-form form').fadeOut('fast', function() {
            $('.contact-form').append('<p class="aftersubmit">Wiadomość została wysłana.</br>Za chwilę nastąpi przekierowanie na górę strony.</p></br><div class="loader"></div>');
            $('input').val(''); // << INPUT RESET AFTER SUBMIT
            $('textarea').val(''); // << TEXTAREA RESET AFTER SUBMIT
            setTimeout(function() { // << RETURN TO TOP AFTER SUBMIT (after 6s)
              location.href = "contact.html"
            }, 6000);
          });
        }
      }
    });
  });
});
