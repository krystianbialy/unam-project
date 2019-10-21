$(document).ready(function () {
  $('.mobile-navigation').hide();
  $('.mobile-navigation-toggle').click(function (e) {
    e.stopPropagation();
    var $open = $('.mobile-navigation');
    if ($open.is(':hidden')) {
      $open.fadeIn();
      $('.mobile-navigation').css('left', '0px')
      $('.navigation').hide();
    }
  });

  $('.mobile-navigation__button-close').click(function (e) {
    e.stopPropagation();
    var $open = $('.mobile-navigation');
    if ($open.is(':visible')) {
      $open.fadeOut();
      $('.navigation').css('display', 'block');
    }
  });

  $('body').click(function (e) {
    e.stopPropagation();
    var $open = $('.mobile-navigation');
    if ($open.is(':visible')) {
      $open.fadeOut();
      $('.navigation').css('display', 'block');
    }
  });
});