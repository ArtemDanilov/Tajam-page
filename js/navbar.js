const nav = document.querySelector('.nav');

export function bgNav() {
    const scrollDown = window.pageYOffset;
    scrollDown >= 100 ? nav.classList.add("scroll-bg") : nav.classList.remove("scroll-bg");
}