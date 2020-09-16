const nav = document.querySelector('.nav');

export function bgNav() {
    const scrollDown = window.pageYOffset;
    scrollDown >= 50 ? nav.classList.add("scroll-bg") : nav.classList.remove("scroll-bg");
}