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

   body.classList.toggle('body');
   body.classList.toggle('dark-body');

   const isDarkMode = body.classList.contains('dark-body');
   document.documentElement.style.setProperty('--text-color', isDarkMode ? '#fff' : '#000');
   document.documentElement.style.setProperty('--background', isDarkMode ? '#191970' : '#6495ed');

}

changeButton.addEventListener('click', () => {
    alternateButton();
    changeTheme();
});

