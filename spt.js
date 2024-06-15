let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) currentSlide = 0;
  if (index < 0) currentSlide = slides.length - 1;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[currentSlide].style.display = 'block';
}

function changeSlide(n) {
  showSlide(currentSlide += n);
}

// Initialize the slider
showSlide(currentSlide);

// Optional: Automatically change slides every 5 seconds
setInterval(() => {
  changeSlide(1);
}, 5000);
