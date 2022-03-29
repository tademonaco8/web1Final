"use strict"

let  images = [];
let i = 0; // start
let time = 2500;

//Image list
images[0] = './images/banner2.png';
images[1] = './images/IT-BUSINESS-PARTNER.jpg';
images[2] = './images/whatsapp-business.jpg';

//Change image
function changeImg() {
    document.querySelector('#slide').src = images[i];

    if(i < images.length -1){
        i++;
    }
    else{
        i = 0;
    }

    setTimeout('changeImg()', time);
}

window.onload = changeImg();