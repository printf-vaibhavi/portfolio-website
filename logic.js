let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const visibleSlides = getVisibleSlides();

function getVisibleSlides() {
  if (window.innerWidth <= 480) return 1;
  if (window.innerWidth <= 768) return 2;
  return 3;
}

function moveSlide(step) {
  const totalSlides = slides.length;
  const maxIndex = totalSlides - visibleSlides;
  currentIndex += step;

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  slidesContainer.style.transform = 'translateX(' + (-currentIndex * (100 / visibleSlides)) + '%)';
}

// Update visibleSlides on resize
window.addEventListener('resize', () => {
  currentIndex = 0;
  slidesContainer.style.transform = 'translateX(0)';
});
