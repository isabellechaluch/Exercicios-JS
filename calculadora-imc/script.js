document.querySelector('#button').addEventListener("click", function () {

    let camponame = document.querySelector('#name').value;
    let campoweight = document.querySelector('#weight').value;
    let campoheight = document.querySelector('#height').value;
    let mostrador = document.querySelector('.mostrador');

    if (camponame !== "" && campoweight !== "" && campoheight !== "") {

        let imc = campoweight / (campoheight * campoheight);

        let classificacao = '';

        if (imc < 18.5) {
            classificacao = 'e você está abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = 'e você está com o peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = 'e você está acima do peso';
        } else {
            classificacao = 'Valor inválido';
        }

        mostrador.textContent = `${camponame}, seu IMC é ${imc.toFixed(2)} ${classificacao}`;
    } else {
        mostrador.textContent = 'Preencha todos os campos!';
    }

});
