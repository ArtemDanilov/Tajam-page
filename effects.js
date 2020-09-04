// Toggle button in navbar 
const navbar = document.getElementById('topNavbar');
const navToggle = document.getElementById('js-navbar-toggle');
  
navToggle.addEventListener('click', function() {
navbar.classList.toggle('active');
})

//Add background color to navbar
const wholeNav = document.getElementById('navMenu');

window.addEventListener("scroll", function() {
    if (window.scrollY > 80) {
        wholeNav.classList.add('navbarBack');
    }
    else {
        wholeNav.classList.remove('navbarBack');
    }
})

//Scroll-behavior
const scrollTop = document.querySelector('img[alt="logo"]');

scrollTop.addEventListener("click", function() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});




