// JavaScript for Carousel
let slideIndex = 0; // Current slide index
showSlides(slideIndex); // Show the first slide

// Function to move slides
function moveSlides(n) {
    showSlides(slideIndex += n); // Adjust the index based on the button click
}

// Function to show the current slide
function showSlides(n) {
    let slides = document.querySelectorAll('.carousel-images img'); // Get all slides
    
    if (n >= slides.length) {
        slideIndex = 0; // Loop back to the first slide
    } else if (n < 0) {
        slideIndex = slides.length - 1; // Loop back to the last slide
    }

    // Hide all images
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Show the current image
    slides[slideIndex].classList.add('active');
}

// Optional: Autoplay functionality
setInterval(() => {
    moveSlides(1); // Automatically move to the next slide every 5 seconds
}, 5000);
