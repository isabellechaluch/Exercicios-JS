let button = document.querySelector('#button_form');

function tab () {

    let number = parseInt(document.querySelector('#number_form').value);
    let show = document.querySelector('.show_box');

    try {
        if (isNaN(number)) throw "Digite um número inteiro!";
        if (number == 0) throw "O número precisa ser maior que 0!";
        
        let result = '';
        let tabuada = '';

        for (let i = 1; i <=10; i++) {
            result = number * i;

            tabuada += `${number} x ${i} = ${result}<br>`;
        }
        show.innerHTML = tabuada;
    } catch (error) {
        window.alert("Erro: " + error);
    }
};

button.addEventListener('click', tab);
