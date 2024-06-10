window.addEventListener('scroll', function () {
    const navbar = document.querySelector('#navbar');
    if(this.window.scrollY > 450) {
        navbar.style.backgroundColor = 'rgba(244, 151, 108, 0.9)';
        // navbar.classList.add('scrolled');
    } else {
        navbar.style.backgroundColor = 'transparent';
        // navbar.classList.remove('scrolled');
    }
})

// const navbar = document.querySelector('#navbar');
// navbar.style.backgroundColor = 'blue';