var imageSlides = document.getElementsByClassName('slider__image');
var circles = document.getElementsByClassName('slider__circle');
var leftArrow = document.getElementById('slider__left-arrow');
var rightArrow = document.getElementById('slider__right-arrow');
var counter = 0;

// hide all images function
function hideImages() {
  for (var i = 0; i < imageSlides.length; i++) {
    imageSlides[i].classList.remove('slider__visible');
  }
}

// remove all dots function
function removeDots() {
  for (var i = 0; i < imageSlides.length; i++) {
    circles[i].classList.remove('slider__dot-circle');
  }
}

// single image loop and circles function
function imageLoop() {
  var currentImage = imageSlides[counter];
  var currentDot = circles[counter];
  currentImage.classList.add('slider__visible');
  removeDots();
  currentDot.classList.add('slider__dot-circle');
  counter++;
}

// left and right arrow function & click event listeners
function arrowClick(e) {
  var target = e.target;
  if (target == leftArrow) {
    clearInterval(imageSlideshowInterval);
    hideImages();
    removeDots();
    if (counter == 1) {
      counter = (imageSlides.length - 1);
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 10000);
    } else {
      counter--;
      counter--;
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 10000);
    }
  } else if (target == rightArrow) {
    clearInterval(imageSlideshowInterval);
    hideImages();
    removeDots();
    if (counter == imageSlides.length) {
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

// image slide function
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
var imageSlideshowInterval = setInterval(slideshow, 10000);