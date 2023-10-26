let imagem = document.querySelector('.img_lampada');
let on = document.querySelector('#on_button');
let off = document.querySelector('#off_button');

function isBroken() {
    return imagem.src.indexOf('quebrada') > -1;
     // Procura a substring quebrada dentro de uma string e retorna o index da primeira ocorrência
    // > -1 Verificar se o resultado de indexOf é maior que -1 , o que ocorre quando ele acha a string
}

function toggleLamp() {
    if (!isBroken()) {
        imagem.src = imagem.src.includes('desligada') ? "img/ligada.jpg"  : "img/desligada.jpg";
    }
}

function broken() {
    imagem.src = "img/quebrada.jpg";
}

on.addEventListener('click', toggleLamp);
off.addEventListener('click', toggleLamp);
imagem.addEventListener('dblclick', broken);


