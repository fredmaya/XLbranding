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

// const navbar = document.querySelector('#navbar');
// navbar.style.backgroundColor = 'blue';
