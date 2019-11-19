$(document).ready(function() {
  $('.FAQ__question').click(function(e) {
    e.preventDefault();
    $(this)
      .next('.FAQ__answer')
      .toggle('duration');
  });
  $('.FAQ__answer').click(function(e) {
    e.preventDefault();
    $(this).hide('duration');
  });
});
