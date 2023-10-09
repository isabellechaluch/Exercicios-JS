let changeButton = document.querySelector('#change-button');
let buttonBall = document.querySelector('#ball');
let texts = document.querySelectorAll('.txt');
let backgrounds = document.querySelectorAll('.backg');
let callButton = document.querySelector('.call-button');
let body = document.querySelector('body');

function alternateButton () {

    // Toggle alterna entre as classes, verificando se ela existe e trocando pela outra
    changeButton.classList.toggle('day-background');
    changeButton.classList.toggle('night-background');
    buttonBall.classList.toggle('day-ball');
    buttonBall.classList.toggle('night-ball');
}

function changeTheme () {

    // (background) => { ... }: Isso define uma função de callback (uma função que será chamada para cada elemento no loop) que recebe um argumento, que é um elemento da NodeList. Neste caso, usamos (background) para representar cada elemento individual.

    backgrounds.forEach((background)=> { //Faz um loop adicionado as classes a cada item da lista de classes
        background.classList.toggle('day-background');
        background.classList.toggle('night-background');
   });

   texts.forEach((text) => {
        text.classList.toggle('day-text');
        text.classList.toggle('night-text');
   }); 

   body.classList.toggle('day-body');
   body.classList.toggle('night-body');

   callButton.classList.toggle('day-button');
   callButton.classList.toggle('night-button');
}

changeButton.addEventListener('click', alternateButton);
changeButton.addEventListener('click', changeTheme);