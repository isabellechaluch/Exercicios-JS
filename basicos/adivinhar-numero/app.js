let buttonGenerate = document.querySelector('#button_generate');
let buttonCheck = document.querySelector('#button_check');
let randomNumber;
let answer = document.querySelector('.show_box');
let control = false;
// Função para gerar número aleatório entre 0 e 10
function createNumber () {
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let randomIndex = Math.floor(Math.random() * numbers.length);
    randomNumber = numbers[randomIndex];
    control = true;

    answer.textContent = 'A random number was generated!';

    // Math.random- retorna um valor decimal aleatório dentro do intervalo [0, 1)
    // Math.random() * meuArray.length- multiplica o valor gerado por Math.random() pelo número de elementos no array. Vira [0, comprimento do array)
    // Math.floor()- usada para arredondar o valor resultante para baixo para o inteiro mais próximo que pode ser usado como um índice.
}

// função para verificar se o número digitado corresponde a gerado
function checkNumber () {
    if (control == true) {
        let typedNumber = parseInt(document.querySelector('#number_form').value);

        if (typedNumber === '' || isNaN(typedNumber)) {
            answer.textContent = 'Type a number!';
        } else if (typedNumber > 10 || typedNumber < 0) {
            answer.textContent = 'Type a number between 0 and 10';
        } else if (typedNumber === randomNumber) {
            answer.textContent = 'You got it!';
            control = false;
        } else {
            answer.textContent = 'Wrong! Try again!';
        }
    } else {
        answer.textContent = 'Generate a number first!';
    }
}

// Eventos botão
buttonGenerate.addEventListener('click', createNumber);
buttonCheck.addEventListener('click', checkNumber);