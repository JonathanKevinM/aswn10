// Background Slider Script
let currentIndex = 0;
const slides = document.querySelectorAll(".background-slider img");

if (slides.length > 0) {
  slides[currentIndex].classList.add("active");

  setInterval(() => {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  }, 4000);
}
