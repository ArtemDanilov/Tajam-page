import anime from 'animejs/lib/anime.es.js';

const bg = document.querySelector('.header__photo-slider');
const dots = [...document.querySelectorAll('.slide-nav__item')];

let index = 0;
let time = 5000;

const images = [ 
    './images/forest.jpg',
    './images/forest-2.jpg',
    './images/forest-3.jpg'
]

const animation = (selector) => {
    anime({
        targets: selector,
        opacity: [0.9, 1],
        duration: 2000,
        easing: 'easeOutExpo'
    })
}

    function imgSlider() {
        index++
        if (index === images.length) index = 0
        bg.style.backgroundImage = `linear-gradient(to right bottom, rgba(9, 5, 47, .8), rgba(49, 29, 94, .8)), url(${images[index]})`

        animation('.header__photo-slider')
    }
    
    function dotSlider() {
        const dotActive = dots.findIndex( dot => dot.classList.contains('active-img'))
    
        dots[dotActive].classList.remove('active-img')
        dots[index].classList.add('active-img')
    }

    let imgSliderTiming = setInterval(imgSlider, time)
    let dotSliderTiming = setInterval(dotSlider, time)

    dots.forEach( ( dot, i ) => dot.addEventListener("click", () => {
        index = i;
        bg.style.backgroundImage = `linear-gradient(to right bottom, rgba(9, 5, 47, .8), rgba(49, 29, 94, .8)), url(${images[index]})`
        dotSlider()
        
        // Time reset for images after clicking 
        
        clearInterval(imgSliderTiming)
        imgSliderTiming = setInterval(imgSlider, time)
        
        // Time reset for dots after clicking 
        
        clearInterval(dotSliderTiming)
        dotSliderTiming = setInterval(dotSlider, time)

        animation('.header__photo-slider')
    }))




