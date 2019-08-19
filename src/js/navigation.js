$(document).ready(function () {
  $('#side-menu').hide();
  $('.open-side-menu').click(function (e) {
    e.stopPropagation();
    var $open = $('#side-menu');
    if ($open.is(':hidden')) {
      $open.fadeIn();
      $('.side-nav').css('left', '0px')
      $('.navigation').css("display", "none");
    } else {}
  });

  $('.btn-close').click(function (e) {
    e.stopPropagation();
    var $open = $('#side-menu');
    if ($open.is(':visible')) {
      $open.fadeOut();
      $('.navigation').css("display", "block");
    } else {}
  });

  $('body').click(function (e) {
    e.stopPropagation();
    var $open = $('#side-menu');
    if ($open.is(':visible')) {
      $open.fadeOut();
      $('.navigation').css("display", "block");
    } else {}
  });
});