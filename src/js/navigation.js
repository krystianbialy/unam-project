$('.navigation__menu--polish-version .navigation__list').append(
  '<li class="navigation__list-item"><a class="navigation__item-data" href="index.html">O firmie</a></li>',
  '<li class="navigation__list-item"><a class="navigation__item-data" href="offer.html">Oferta</a></li>',
  '<li class="navigation__list-item"><a class="navigation__item-data" href="press.html">Tłocznia</a></li>',
  '<li class="navigation__list-item"><a class="navigation__item-data" href="tool-shop.html">Narzędziownia</a></li>',
  '<li class="navigation__list-item"><a class="navigation__item-data" href="laser.html">Laser</a></li>',
  '<li class="navigation__list-item"><a class="navigation__item-data" href="gallery.html">Galeria</a></li>',
  '<li class="navigation__list-item"><a class="navigation__item-data" href="funding.html">Dofinansowanie z UE</a></li>',
  '<li class="navigation__list-item"><a class="navigation__item-data" href="contact.html">Kontakt</a></li></ul>'
);
$('.mobile-navigation--polish-version .mobile-navigation__menu').append(
  '<a class="mobile-navigation__item-data" href="index.html">O firmie</a>',
  '<a class="mobile-navigation__item-data" href="offer.html">Oferta</a>',
  '<a class="mobile-navigation__item-data" href="press.html">Tłocznia</a>',
  '<a class="mobile-navigation__item-data" href="tool-shop.html">Narzędziownia</a>',
  '<a class="mobile-navigation__item-data" href="laser.html">Laser</a>',
  '<a class="mobile-navigation__item-data" href="gallery.html">Galeria</a>',
  '<a class="mobile-navigation__item-data" href="funding.html">Dofinansowanie z UE</a>',
  '<a class="mobile-navigation__item-data" href="contact.html">Kontakt</a>'
);

// English version of navigation
$('.navigation__menu--english-version .navigation__list').append(
  '<li class="navigation__list-item"><a class="navigation__item-data" href="index.html">About company</a></li>',
  '<li class="navigation__list-item"><a class="navigation__item-data" href="offer.html">Offer</a></li>',
  '<li class="navigation__list-item"><a class="navigation__item-data" href="press.html">Press</a></li>',
  '<li class="navigation__list-item"><a class="navigation__item-data" href="tool-shop.html">Tool-shop</a></li>',
  '<li class="navigation__list-item"><a class="navigation__item-data" href="laser.html">Laser</a></li>',
  '<li class="navigation__list-item"><a class="navigation__item-data" href="gallery.html">Gallery</a></li>',
  '<li class="navigation__list-item"><a class="navigation__item-data" href="funding.html">EU Funding</a></li>',
  '<li class="navigation__list-item"><a class="navigation__item-data" href="contact.html">Contact</a></li></ul>'
);
$('.mobile-navigation--english-version .mobile-navigation__menu').append(
  '<a class="mobile-navigation__item-data" href="index.html">About company</a>',
  '<a class="mobile-navigation__item-data" href="offer.html">Offer</a>',
  '<a class="mobile-navigation__item-data" href="press.html">Press</a>',
  '<a class="mobile-navigation__item-data" href="tool-shop.html">Tool-shop</a>',
  '<a class="mobile-navigation__item-data" href="laser.html">Laser</a>',
  '<a class="mobile-navigation__item-data" href="gallery.html">Gallery</a>',
  '<a class="mobile-navigation__item-data" href="funding.html">EU Funding</a>',
  '<a class="mobile-navigation__item-data" href="contact.html">Contact</a>'
);

$(document).ready(function() {
  $('.mobile-navigation').hide();
  $('.mobile-navigation-toggle').click(function(e) {
    var $open = $('.mobile-navigation');
    e.stopPropagation();
    if ($open.is(':hidden')) {
      $open.fadeIn();
      $('.mobile-navigation').css('left', '0px');
      $('.navigation').hide();
    }
  });

  $('.mobile-navigation__button-close').click(function(e) {
    var $open = $('.mobile-navigation');
    e.stopPropagation();
    if ($open.is(':visible')) {
      $open.fadeOut();
      $('.navigation').css('display', 'block');
    }
  });

  $('body').click(function(e) {
    var $open = $('.mobile-navigation');
    e.stopPropagation();
    if ($open.is(':visible')) {
      $open.fadeOut();
      $('.navigation').css('display', 'block');
    }
  });
});
