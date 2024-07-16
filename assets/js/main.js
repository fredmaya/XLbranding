window.addEventListener("scroll", function () {
  const navbar = document.querySelector("#navbar");
  const navbarLogo = this.document.querySelector(".navbar-logo");
  if (this.window.scrollY > 230) {
    navbar.style.backgroundColor = "rgba(244, 151, 108, 1)";
    navbar.style.transition = "background-color 0.2s ease-in";

    navbarLogo.classList.remove("hidden");
    heroLogo.classList.add("hidden");
    // navbar.classList.add('scrolled');
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.transition = "background-color 0.2s ease-out";
    navbarLogo.classList.add("hidden");

    // navbar.classList.remove('scrolled');

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
