$(document).ready(function () {

  $('.gallery__machine-park-images-box').hide();
  $('.gallery__main-image--machine-park').click(function (e) {
    e.stopPropagation();
    var $mainImagesBox = $('.gallery__main-images-box');
    var $galleryImagesBox = $('.gallery__machine-park-images-box');
    if ($galleryImagesBox.is(':hidden')) {
      $galleryImagesBox.fadeIn();
      $($mainImagesBox).hide();
    }
  });

  $('.gallery__details-images-box').hide();
  $('.gallery__main-image--details').click(function (e) {
    e.stopPropagation();
    var $mainImagesBox = $('.gallery__main-images-box');
    var $galleryImagesBox = $('.gallery__details-images-box');
    if ($galleryImagesBox.is(':hidden')) {
      $galleryImagesBox.fadeIn();
      $($mainImagesBox).hide();
    }
  });

  $('.gallery__tools-images-box').hide();
  $('.gallery__main-image--tools').click(function (e) {
    e.stopPropagation();
    var $mainImagesBox = $('.gallery__main-images-box');
    var $galleryImagesBox = $('.gallery__tools-images-box');
    if ($galleryImagesBox.is(':hidden')) {
      $galleryImagesBox.fadeIn();
      $($mainImagesBox).hide();
    }
  });

  // Magnific Popup 
  $('.gallery__view-machine-park-images').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  $('.gallery__view-details-images').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  $('.gallery__view-tools-images').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});