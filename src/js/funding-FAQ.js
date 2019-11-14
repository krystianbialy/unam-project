$(document).ready(function() {
  $('.funding__FAQ-question').click(function(e) {
    e.preventDefault();
    $(this)
      .next('.funding__FAQ-answer')
      .toggle('duration');
  });
  $('.funding__FAQ-answer').click(function(e) {
    e.preventDefault();
    $(this).hide('duration');
  });
});
