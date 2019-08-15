//===== NAVIGATION =====
$(document).ready(function () {
  $('#side-menu').hide();
  $('.open-slide').click(function (e) {
    e.stopPropagation();
    var $open = $('#side-menu');
    if ($open.is(':hidden')) {
      $open.fadeIn();
      $('.side-nav').css('left', '0px')
      $('.navbar').css("display", "none");
    } else {}
  });

  $('.btn-close').click(function (e) {
    e.stopPropagation();
    var $open = $('#side-menu');
    if ($open.is(':visible')) {
      $open.fadeOut();
      $('.navbar').css("display", "block");
    } else {}
  });

  $('body').click(function (e) {
    e.stopPropagation();
    var $open = $('#side-menu');
    if ($open.is(':visible')) {
      $open.fadeOut();
      $('.navbar').css("display", "block");
    } else {}
  });
});