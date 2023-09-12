let imagem = document.querySelector('.img_lampada');
let on = document.querySelector('#on_button');
let off = document.querySelector('#off_button');

function isbroken () {
    return imagem.src.indexOf('quebrada') > -1
}

function turn_on () {
    if (!isbroken ()) {
        imagem.src = "img/ligada.jpg";
    }
}

function turn_off () {
    if (!isbroken ()) {
        imagem.src = "img/desligada.jpg";
    }
}

function broken () {
    imagem.src = "img/quebrada.jpg";
}

on.addEventListener('click', turn_on);
off.addEventListener('click', turn_off);
imagem.addEventListener('mouseover', turn_on);
imagem.addEventListener('mouseleave', turn_off);
imagem.addEventListener('dblclick', broken);

// indexOf - procura uma string