import "../sass/main.scss"
import "./headerSlider"

import { bgNav, smoothScroll } from "./navbar.js";
import peopleSlider from "./peopleSlider"
import display from './displayContent'
import './popup'

const links = document.querySelectorAll(".nav__list--item");

for (const link of links) {
    link.addEventListener("click", smoothScroll)
}

window.addEventListener('scroll', bgNav);
peopleSlider()
window.addEventListener( 'scroll', display)