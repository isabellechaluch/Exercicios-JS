(function(){
    
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let btnC = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button) {
        button.addEventListener('click', function (showNumber) {
            let value = showNumber.target.dataset.num; // e.target é p botão clicado, dataset recupera o atributo e num é o nome do atributo
            screen.value += value; // Mostra na tela o valor digitado
        })
    });

    equal.addEventListener('click', function(showNumber) {
        if (screen.value === '') {
            screen.value = "Digite uma expressão";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    });

    btnC.addEventListener('click', function(showNumber) {
        screen.value = "";      
    });
})(); //end IIFE