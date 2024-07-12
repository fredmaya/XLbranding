window.addEventListener("scroll", function () {
  const navbar = document.querySelector("#navbar");
  if (this.window.scrollY > 300) {
    navbar.style.backgroundColor = "rgba(244, 151, 108, 1)";
    navbar.style.transition = "background-color 0.2s ease-in";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});

// JavaScript for automatic image rotation
document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 1;
  const totalSlides = 3; // Total number of slides

  function showSlide(slideIndex) {
    // Hide all slides
    for (let i = 1; i <= totalSlides; i++) {
      document.getElementById(`slide${i}`).classList.add("hidden");
    }
    // Show the current slide
    document.getElementById(`slide${slideIndex}`).classList.remove("hidden");
  }

  function nextSlide() {
    currentSlide = (currentSlide % totalSlides) + 1;
    showSlide(currentSlide);
  }

  // Automatically rotate slides every 3 seconds
  setInterval(nextSlide, 2000); // Adjust timing as needed (in milliseconds)
});
