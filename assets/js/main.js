window.addEventListener('scroll', function () {
    const navbar = document.querySelector('#navbar');
    if(this.window.scrollY > 20) {
        // navbar.style.backgroundColor = 'blue';
        navbar.classList.add('scrolled');
    } else {
        // navbar.style.backgroundColor = 'red';
        navbar.classList.remove('scrolled');
    }
})

// const navbar = document.querySelector('#navbar');
// navbar.style.backgroundColor = 'blue';