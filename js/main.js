import { bgNav, openNav } from "./navbar.js";

const btn = document.getElementById("hamburger")

window.addEventListener('scroll', bgNav);
btn.addEventListener('click', openNav);