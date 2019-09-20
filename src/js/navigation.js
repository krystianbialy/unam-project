$(document).ready(function () {
  $('.mobile-navigation').hide();
  $('.mobile-navigation-toggle').click(function (e) {
    e.stopPropagation();
    var $open = $('.mobile-navigation');
    if ($open.is(':hidden')) {
      $open.fadeIn();
      $('.mobile-navigation').css('left', '0px')
      $('.navigation').css("display", "none");
    } else {}
  });

  $('.mobile-navigation__button-close').click(function (e) {
    e.stopPropagation();
    var $open = $('.mobile-navigation');
    if ($open.is(':visible')) {
      $open.fadeOut();
      $('.navigation').css("display", "block");
    } else {}
  });

  $('body').click(function (e) {
    e.stopPropagation();
    var $open = $('.mobile-navigation');
    if ($open.is(':visible')) {
      $open.fadeOut();
      $('.navigation').css("display", "block");
    } else {}
  });
});