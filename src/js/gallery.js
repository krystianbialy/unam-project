/* eslint-disable prettier/prettier */
$(document).ready(function() {
  $('.gallery__back-button').hide();
  $('.gallery__back-button').click(function(e) {
    e.stopPropagation();
    location.reload();
  });

  $('.gallery__machine-park-images-box').hide();
  $('.gallery__main-image--machine-park').click(function(e) {
    var $mainImagesBox = $('.gallery__main-images-box');
    var $galleryImagesBox = $('.gallery__machine-park-images-box');
    var $backButton = $('.gallery__back-button');
    e.stopPropagation();
    if ($galleryImagesBox.is(':hidden')) {
      window.location.hash = '#gallery__top';
      $galleryImagesBox.css({"display": "grid"});
      $galleryImagesBox.fadeIn();
      $($mainImagesBox).hide();
    }
    if ($backButton.is(':hidden')) {
      $backButton.css({ "display": "flex" });
      $backButton.fadeIn();
    }
  });

  $('.gallery__details-images-box').hide();
  $('.gallery__main-image--details').click(function(e) {
    var $mainImagesBox = $('.gallery__main-images-box');
    var $galleryImagesBox = $('.gallery__details-images-box');
    var $backButton = $('.gallery__back-button');
    e.stopPropagation();
    if ($galleryImagesBox.is(':hidden')) {
      window.location.hash = '#gallery__top';
      $galleryImagesBox.css({"display": "grid"});
      $galleryImagesBox.fadeIn();
      $($mainImagesBox).hide();
    }
    if ($backButton.is(':hidden')) {
      $backButton.css({ "display": "flex" });
      $backButton.fadeIn();
    }
  });

  $('.gallery__tools-images-box').hide();
  $('.gallery__main-image--tools').click(function(e) {
    var $mainImagesBox = $('.gallery__main-images-box');
    var $galleryImagesBox = $('.gallery__tools-images-box');
    var $backButton = $('.gallery__back-button');
    e.stopPropagation();
    if ($galleryImagesBox.is(':hidden')) {
      window.location.hash = '#gallery__top';
      $galleryImagesBox.css({"display": "grid"});
      $galleryImagesBox.fadeIn();
      $($mainImagesBox).hide();
    }
    if ($backButton.is(':hidden')) {
      $backButton.css({ "display": "flex" });
      $backButton.fadeIn();
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
