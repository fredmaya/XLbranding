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

document.addEventListener("DOMContentLoaded", function () {
  const totalSlides = 3; // Total number of slides
  let currentSlide = 1;

  // Function to show a specific slide
  function showSlide(slideIndex) {
    // Hide all slides
    for (let i = 1; i <= totalSlides; i++) {
      document.getElementById(`slide${i}`).classList.add("hidden");
    }
    // Show the current slide
    document.getElementById(`slide${slideIndex}`).classList.remove("hidden");
  }

  // Function to preload images
  function preloadImages() {
    for (let i = 1; i <= totalSlides; i++) {
      const img = new Image();
      img.src = `./assets/img/HEAT TRANSFERS${i}.jpg`; // Replace with your actual image paths
    }
  }

  // Initialize carousel
  function initCarousel() {
    preloadImages(); // Preload images before starting the carousel
    showSlide(currentSlide); // Show the first slide immediately
  }

  // Function to move to the next slide
  function nextSlide() {
    currentSlide = (currentSlide % totalSlides) + 1;
    showSlide(currentSlide);
  }

  // Function to move to the previous slide
  function prevSlide() {
    currentSlide = ((currentSlide - 2 + totalSlides) % totalSlides) + 1; // Adjust this formula to ensure it wraps correctly
    showSlide(currentSlide);
  }

  // Start the carousel
  initCarousel();

  // Add event listeners to arrows
  document.getElementById("nextButton").addEventListener("click", nextSlide);
  document.getElementById("prevButton").addEventListener("click", prevSlide);
});
