let add_button = document.querySelector('#button_form_add');
let final_button = document.querySelector('#button_end');
let show = document.querySelector('.show_box');
let result = document.querySelector('.results_box');
let numbers_added = [];

function add () {
    let number = parseInt(document.querySelector('#number_form').value);

    if (isNaN(number) || numbers_added.includes(number)) { 
        //Includes verifica se o número já existe no array
        show.textContent = 'Valor inválido ou já existe!';
    } else {
        numbers_added.push(number); //Add um número ao array
        show.textContent = (numbers_added);
    }
}

function final() {
    let size_array = numbers_added.length;
    let max = numbers_added[0];
    let min = numbers_added[0];
    let soma = 0;

    if (numbers_added.length === 0) {
        result.textContent = 'Adicione algum valor!';
    } else {
        // Encontra o valor maior
        for (let i = 1; i < numbers_added.length; i++) {
            if (numbers_added[i] > max) {
                max = numbers_added[i];
            }
        }

        // Encontra o valor menor
        for (let i = 1; i < numbers_added.length; i++) {
            if (numbers_added[i] < min) {
                min = numbers_added[i];
            }
        }

        // Faz a soma de todos os números
        for (let i = 0; i < numbers_added.length; i++) {
            soma = soma + numbers_added[i];
        }

        //Calcular a média
        media = (soma / numbers_added.length);

        result.innerHTML = '<p>Ao todo temos ' + size_array + ' números</p>';
        result.innerHTML += '<p>O maior valor é ' + max + '</p>';
        result.innerHTML += '<p>O menor valor é ' + min + '</p>';
        result.innerHTML += '<p>A soma dos valores é ' + soma + '</p>';
        result.innerHTML += '<p>A média dos valores é ' + media + '</p>';
    }
}

add_button.addEventListener('click', add);
final_button.addEventListener('click', final);