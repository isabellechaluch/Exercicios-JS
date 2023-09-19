let images = ["img/picture-1.jpg", "img/picture-2.jpg", "img/picture-3.jpg", "img/picture-4.jpg", "img/picture-5.jpg", "img/picture-16.jpg"]
let slides = document.querySelector('.picture');
let previous = document.querySelector('#previous_button');
let next = document.querySelector('#next_button');
let indice = 0;

function nextslide () {
    slides.src = images[indice];
    indice = (indice + 1);

    setTimeout(3000);
}

next.addEventListener('click', nextslide);