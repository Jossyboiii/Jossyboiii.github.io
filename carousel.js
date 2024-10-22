
// JavaScript for Carousel
let slideIndex = 0;
showSlides(slideIndex);

function moveSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.querySelectorAll('.carousel-images img');
  
  if (n >= slides.length) { 
    slideIndex = 0;
  }
  
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  
  // Hide all images
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  // Show the current image
  slides[slideIndex].classList.add('active');
}
