import "../sass/main.scss"
import "./headerSlider"

import { bgNav, openNav, smoothScroll } from "./navbar.js";
import peopleSlider from "./peopleSlider"

const links = document.querySelectorAll(".nav__list--item");

for (const link of links) {
    link.addEventListener("click", smoothScroll)
}

window.addEventListener('scroll', bgNav);
peopleSlider()