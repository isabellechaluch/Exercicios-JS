let buttonGenerate = document.querySelector('#button_generate');
let buttonCheck = document.querySelector('#button_check');
let randomNumber;
let answer = document.querySelector('.show_box');

function createNumber () {
    let numbers = [0,1,2,3,4,5,6,7,8,9,10];
    let randomIndex = Math.floor(Math.random() * numbers.length);
    randomNumber = numbers[randomIndex];

    answer.textContent = 'A random number was generated!';

    // Math.random- retorna um valor decimal aleatório dentro do intervalo [0, 1)
    // Math.random() * meuArray.length- multiplica o valor gerado por Math.random() pelo número de elementos no array. Vira [0, comprimento do array)
    // Math.floor()- usada para arredondar o valor resultante para baixo para o inteiro mais próximo que pode ser usado como um índice.
}

function checkNumber () {
    let typedNumber = parseInt(document.querySelector('#number_form').value);
    let answer = document.querySelector('.show_box');

    if (typedNumber === '' || isNaN(typedNumber)) {
        answer.textContent = 'Type a number!';
    } else if (typedNumber === randomNumber) {
        answer.textContent = 'You got it!';
    } else {
        answer.textContent = 'Wrong! Try again!'
    }
}

buttonGenerate.addEventListener('click', createNumber);
buttonCheck.addEventListener('click', checkNumber);