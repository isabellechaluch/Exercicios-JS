let add_button = document.querySelector('#button_form_add');
let final_button = document.querySelector('#button_end');
let show = document.querySelector('.show_box');
let result = document.querySelector('.results_box');
let numbersAdded = [];

// Adiciona o número ao array
function addNumber () {
    let number = parseInt(document.querySelector('#number_form').value);
    let formField = document.querySelector('form');

    if (isNaN(number)) { 
        //Includes verifica se o número já existe no array
        show.textContent = 'Por favor insira um número!';
    } else if (numbersAdded.includes(number)) {
        show.textContent = 'Valor já existe!';
    } else if (number > 100) {
        show.textContent = 'Valor maior que 100!';
    } else {
        numbersAdded.push(number); //Add um número ao array
        show.textContent = (numbersAdded);
        formField.reset(); //Reseta o campo do formulário após adicionar o número
    }
}

// Calcula o tamanho do array,encontra o número maoir e menor, faz a soma e a media
function analyze() {
    let sizeArray = numbersAdded.length;
    let max = numbersAdded[0];
    let min = numbersAdded[0];
    let soma = 0;

    if (numbersAdded.length === 0) {
        result.textContent = 'Adicione algum valor!';
    } else {
        // Encontra o valor maior e o menor
        for (let i = 1; i < numbersAdded.length; i++) {
            if (numbersAdded[i] > max) {
                max = numbersAdded[i];
            }

            if (numbersAdded[i] < min) {
                min = numbersAdded[i];
            }
        }

        // Faz a soma de todos os números
        for (let i = 0; i < numbersAdded.length; i++) {
            soma = soma + numbersAdded[i];
        }

        //Calcular a média
        let media = (soma / numbersAdded.length);

        result.innerHTML = '<p>Ao todo temos ' + sizeArray + ' números</p>' +  '<p>O maior valor é ' + max + '</p>' + '<p>O menor valor é ' + min + '</p>' + '<p>A soma dos valores é ' + soma + '</p>' + '<p>A média dos valores é ' + media + '</p>';
    }
}

add_button.addEventListener('click', addNumber);
final_button.addEventListener('click', analyze);