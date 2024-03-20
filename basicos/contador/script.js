let button = document.querySelector('#button_form');
let show = document.querySelector('.show_box');

function count () {
    let start = parseInt(document.querySelector('#start_form').value);
    let end = parseInt(document.querySelector('#end_form').value)
    let iteracao = parseInt(document.querySelector('#count_form').value);

    if (start == 0 || end == 0 || iteracao == 0) {
        window.alert("Preencha todos os campos necessários!");
    } else {
        let result = '';

        for (let index = start; index <= end; index += iteracao) {
            result += index + " ";
            show.textContent = result;
        }
    }
}

button.addEventListener('click', count);
