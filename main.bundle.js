!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e){function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var n,o=document.querySelector(".header"),a=function(t){if(Array.isArray(t))return r(t)}(n=document.querySelectorAll(".slide-nav__item"))||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(n)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),i=0,c=["./images/forest.jpg","./images/forest-2.jpg","./images/forest-3.jpg"];function l(){++i===c.length&&(i=0),o.style.backgroundImage="linear-gradient(to right bottom, rgba(9, 5, 47, .8), rgba(49, 29, 94, .8)), url(".concat(c[i],")")}function u(){var t=a.findIndex((function(t){return t.classList.contains("active-img")}));a[t].classList.remove("active-img"),a[i].classList.add("active-img")}var f=setInterval(l,3e3),s=setInterval(u,3e3);a.forEach((function(t,e){return t.addEventListener("click",(function(){i=e,o.style.backgroundImage="linear-gradient(to right bottom, rgba(9, 5, 47, .8), rgba(49, 29, 94, .8)), url(".concat(c[i],")"),u(),clearInterval(f),f=setInterval(l,3e3),clearInterval(s),s=setInterval(u,3e3)}))}))},function(t,e,r){"use strict";r.r(e);var n=document.querySelector(".nav"),o=document.querySelector(".nav-bg"),a=document.querySelector(".nav__list");function i(t){t.preventDefault();var e=t.target.getAttribute("href");window.scrollTo({top:document.querySelector(e).offsetTop-50,behavior:"smooth"})}r(0);function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var l,u=document.getElementById("hamburger"),f=function(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){l=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}(document.querySelectorAll(".nav__list--item"));try{for(f.s();!(l=f.n()).done;){l.value.addEventListener("click",i)}}catch(t){f.e(t)}finally{f.f()}window.addEventListener("scroll",(function(){window.pageYOffset>=50?n.classList.add("scroll-bg"):n.classList.remove("scroll-bg")})),u.addEventListener("click",(function(){o.classList.toggle("nav-bg-active"),a.classList.toggle("nav-list-active")}))}]);