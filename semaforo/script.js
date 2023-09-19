let semaforo = document.querySelector('#picture_semaforo');
let red = document.querySelector('#red_button');
let yellow = document.querySelector('#yellow_button');
let green = document.querySelector('#green_button');
let modo_auto = document.querySelector('#auto_button');
let pictures = ["img/vermelho.png", "img/amarelo.png", "img/verde.png"];
let indice = 0;

function redmode () {
    semaforo.src = "img/vermelho.png";
}

function yellowmode () {
    semaforo.src = "img/amarelo.png";
}

function greenmode () {
    semaforo.src = "img/verde.png";
}

function automatic () {
    semaforo.src = pictures[indice];
    indice = (indice + 1) % pictures.length;

    setTimeout(automatic, 3000);
}

red.addEventListener('click', redmode);
yellow.addEventListener('click', yellowmode);
green.addEventListener('click', greenmode);
modo_auto.addEventListener('click', automatic);