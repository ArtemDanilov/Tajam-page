import anime from 'animejs/lib/anime.es.js';

const people = [...document.querySelectorAll(".people__img-container--img")];

const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")

const fullName = document.getElementById("targetName")
const profession = document.getElementById("targetProfession")

const peopleData = [
    {
        fullName: "Mark Ford",
        profession: "sale specialist"
    },
    {
        fullName: "Geneva Yakovlevna",
        profession: "project manager"
    },
    {
        fullName: "Joe Hook",
        profession: "graphic designer"
    }
]

const div = document.createElement('div')
let index = 1;

export default function personPresentation() {
    div.innerHTML = `
    <h4 class="heading-4 u-margin-top--m people__name" id="targetName">${peopleData[index].fullName}</h4>
    <p class="paragraph people__profession" id="targetProfession">${peopleData[index].profession}</p> `
    
    document.querySelector('.people__slider').before(div)
    div.classList.add('people__present')

    anime({
        targets: '.people__present',
        translateX: [-30, 0],
        opacity: [0,1],
        transition: 100,
        easing: 'easeOutExpo'
    })
}

prevBtn.addEventListener('click', () => {
    people[index].classList.remove("img-active")
    
    if (index === 0) index = people.length;
    index--
    
    people[index].classList.add("img-active") 
    
    personPresentation()
    fullName.innerHTML = peopleData[index].fullName
    profession.innerHTML = peopleData[index].profession
})

nextBtn.addEventListener('click', () => {
    people[index].classList.remove("img-active")
    
    if (index === people.length - 1) index = -1;
    index++
    
    people[index].classList.add("img-active")
    
    personPresentation()
    fullName.innerHTML = peopleData[index].fullName
    profession.innerHTML = peopleData[index].profession
})