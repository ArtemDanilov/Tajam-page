import anime from 'animejs/lib/anime.es.js';

const story = [
    document.querySelector('.story__img'),
    document.querySelector('.story__text')
]
const portfolio = document.querySelector('.portfolio__about')
const portfolioImg = [...document.querySelectorAll('.gallery__item')]

// Parametr which decide when exactly content should be displayed 
const displayFor = 500

const displayContent = () => {
    const Y = window.scrollY + displayFor
    let time = 0.2
         
    story.forEach( one => {
        if ( Y >= one.offsetTop ) one.classList.add('display')
    })

    if ( Y >= portfolio.offsetTop) {
        portfolio.classList.add('display')

        portfolioImg.forEach( photo => {
            time += 0.1
            photo.style.transitionDelay = time + 's'
            photo.classList.add('display')
        })
    }
}

// Anime header content 
anime({
    targets: '.about',
    filter: ['blur(5px)', 'blur(0px)'],
    easing: 'easeInExpo',
    duration: 1000
})

export default displayContent