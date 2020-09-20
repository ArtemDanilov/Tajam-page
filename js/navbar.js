const nav = document.querySelector('.nav');
const bg = document.querySelector('.nav-bg');
const navList = document.querySelector('.nav__list')

export function bgNav() {
    const scrollDown = window.pageYOffset;
    scrollDown >= 50 ? nav.classList.add("scroll-bg") : nav.classList.remove("scroll-bg");
}

export function openNav() {
    bg.classList.toggle('nav-bg-active');
    navList.classList.toggle('nav-list-active');
}