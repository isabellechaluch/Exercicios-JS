let button = document.querySelector('#button_form');
let show = document.querySelector('.show_box');

function count () {
    let start = parseInt(document.querySelector('#start_form').value);
    let end = parseInt(document.querySelector('#end_form').value)
    let iteracao = parseInt(document.querySelector('#count_form').value);

    try {
        if (start === "" || end === "" || iteracao === "") throw "Preencha todos os campos com números!";
        if (isNaN(start) || isNaN(end) || isNaN(iteracao)) throw "Coloque apenas números!";
        if (start == 0 || end == 0 || iteracao == 0) throw "Os valores devem ser maiores que 0!";
        
        if (start == 0 || end == 0 || iteracao == 0) throw "Os valores devem ser maiores que 0!";
        let result = "";
        for (let index = start; index <= end; index += iteracao) {
            result += index + " ";
            show.textContent = result;
        }
       
    } catch (error) {
        window.alert("Erro: " + error);
    }
}

button.addEventListener('click', count);
