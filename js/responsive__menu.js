"use strict";

document.querySelector(".btn__menu").addEventListener("click", toggleMenu);

function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("show");
}