document.querySelector('#button').addEventListener("click", function () {

    let campoName = document.querySelector('#name').value;
    let campoWeight = parseInt(document.querySelector('#weight').value);
    let campoHeight = parseFloat(document.querySelector('#height').value);
    let mostrador = document.querySelector('.mostrador');
    
    if (campoName == "" || isNaN(campoWeight) || isNaN(campoHeight) || campoHeight <= 0) { // Verifica se os campos estão vazios e se são númeross

        mostrador.textContent = 'Preencha todos os campos com valores válidos!';

    } else { 

        let imc = campoWeight / (campoHeight * campoHeight);

        let classificacao = '';

        if (imc < 18.5 && imc > 0) {
            classificacao = 'e você está abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = 'e você está com o peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = 'e você está acima do peso';
        } else {
            classificacao = 'Você está com obesidade';
        }

        mostrador.textContent = `${campoName}, seu IMC é ${imc.toFixed(2)} ${classificacao}`;       
    }

});
