"use strict";

function checkcaptcha(e) {
    const captchatxt = this.querySelector(".captchatxt");
    const maincaptcha = this.querySelector(".maincaptcha");
    let name = this.querySelector("#name-form");
    let lastname = this.querySelector("#lname-form");
    let email = this.querySelector("#mail-form");
    let birthday = this.querySelector("#birthday-form");
    if (captchatxt.innerText == maincaptcha.value && (name, lastname, email, birthday != '')) {
        console.log("captcha correcto");
        e.preventDefault();
        document.querySelector(".maincaptcha").value = "";
        document.querySelector("#name-form").value = "";
        document.querySelector("#lname-form").value = "";
        document.querySelector("#mail-form").value = "";
        document.querySelector("#birthday-form").value = "";
        document.querySelector("#tArea-form").value = "";
        document.querySelector(".captcharesult").innerHTML = "Congratulations! You are definetely not a robot. Your consultation was successfully delivered.";

    } else {
        console.log("captcha incorrecto");
        e.preventDefault();
        document.querySelector(".maincaptcha").value = "";
        document.querySelector("#name-form").value = "";
        document.querySelector("#lname-form").value = "";
        document.querySelector("#mail-form").value = "";
        document.querySelector("#birthday-form").value = "";
        document.querySelector("#tArea-form").value = "";
        document.querySelector(".captcharesult").innerHTML = "It seems like you missed, try again.";
    }
    return false;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const n1 = getRandomInt(1000, 9000);
const n2 = getRandomInt(10000, 90000);

const formularios = document.querySelectorAll("#captchaform");
for (let formulario of formularios) {
    formulario.addEventListener("submit", checkcaptcha);
    const captchatxt = formulario.querySelector(".captchatxt");
    captchatxt.innerText = (n1 + n2);
}