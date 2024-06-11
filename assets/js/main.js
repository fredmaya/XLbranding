window.addEventListener('scroll', function () {
    const navbar = document.querySelector('#navbar');
    if(this.window.scrollY > 400) {
        navbar.style.backgroundColor = 'rgba(244, 151, 108, 1)';
        navbar.style.transition = 'background-color 0.2s ease-in'
        // navbar.classList.add('scrolled');
    } else {
        navbar.style.backgroundColor = 'transparent';
        // navbar.classList.remove('scrolled');
    }
})

// const navbar = document.querySelector('#navbar');
// navbar.style.backgroundColor = 'blue';