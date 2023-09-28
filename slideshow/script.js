let images = ["img/picture-1.jpg", "img/picture-2.jpg", "img/picture-3.jpg", "img/picture-4.jpg", "img/picture-5.jpg"];
let slides = document.querySelector('#picture');
let previous = document.querySelector('#previous_button');
let next = document.querySelector('#next_button');
let indice = 0;

function nextslide () {
    indice = (indice + 1) % images.length;
    slides.src = images[indice];
}

function prevslide () {
    indice = (indice - 1 + images.length) % images.length;
    slides.src = images[indice];
}

next.addEventListener('click', nextslide);
previous.addEventListener('click', prevslide);