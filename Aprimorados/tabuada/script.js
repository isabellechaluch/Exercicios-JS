let button = document.querySelector('#button_form');

function tab () {

    let number = parseInt(document.querySelector('#number_form').value);
    let show = document.querySelector('.show_box');

    if (isNaN(number) || number == 0) {
        show.textContent = "Valor inválido! Digite um número inteiro e maior que 0";
    } else {
        let result = '';
        let tabuada = '';

        for (let i = 1; i <=10; i++) {
            result = number * i;

            tabuada += `${number} x ${i} = ${result}<br>`;
        }

        show.innerHTML = tabuada;
    }
}

button.addEventListener('click', tab);
