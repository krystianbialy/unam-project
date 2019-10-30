/* eslint-disable no-use-before-define */
var imageSlides = document.getElementsByClassName('slider__image');
var circles = document.getElementsByClassName('slider__circle');
var leftArrow = document.getElementById('slider__left-arrow');
var rightArrow = document.getElementById('slider__right-arrow');
var counter = 0;

function hideImages() {
  var i = 0;
  for (; i < imageSlides.length; i += 1) {
    imageSlides[i].classList.remove('slider__visible');
  }
}

function removeDots() {
  var i = 0;
  for (; i < imageSlides.length; i += 1) {
    circles[i].classList.remove('slider__dot-circle');
  }
}

function imageLoop() {
  var currentImage = imageSlides[counter];
  var currentDot = circles[counter];
  currentImage.classList.add('slider__visible');
  removeDots();
  currentDot.classList.add('slider__dot-circle');
  counter += 1;
}

function arrowClick(e) {
  var target = e.target;
  if (target === leftArrow) {
    clearInterval(imageSlideshowInterval);
    hideImages();
    removeDots();
    if (counter === 1) {
      counter = imageSlides.length - 1;
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 10000);
    } else {
      counter -= 1;
      counter -= 1;
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 10000);
    }
  } else if (target === rightArrow) {
    clearInterval(imageSlideshowInterval);
    hideImages();
    removeDots();
    if (counter === imageSlides.length) {
      counter = 0;
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 10000);
    } else {
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 10000);
    }
  }
}

leftArrow.addEventListener('click', arrowClick);
rightArrow.addEventListener('click', arrowClick);

function slideshow() {
  if (counter < imageSlides.length) {
    imageLoop();
  } else {
    counter = 0;
    hideImages();
    imageLoop();
  }
}

// show first image and then set & call slide interval
setTimeout(slideshow, 1000);

// eslint-disable-next-line vars-on-top
var imageSlideshowInterval = setInterval(slideshow, 10000);
