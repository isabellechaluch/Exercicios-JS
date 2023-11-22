document.querySelector('#button').addEventListener("click", function () {

    let campoName = document.querySelector('#name').value;
    let campoWeight = parseInt(document.querySelector('#weight').value);
    let campoHeight = parseFloat(document.querySelector('#height').value);
    let mostrador = document.querySelector('.mostrador');
    
    if (campoName == "" || isNaN(campoWeight) || isNaN(campoHeight) || campoHeight <= 0) {
        mostrador.textContent = 'Preencha todos os campos com valores válidos!';
    } else { 
        const imc = calcularIMC(campoWeight, campoHeight);
        const classificacao = obterClassificacao(imc);

        mostrador.textContent = `${campoName}, seu IMC é ${imc.toFixed(2)} ${classificacao}`;       
    }

    function calcularIMC(weight, height) {
        return weight / (height * height);
    }

    function obterClassificacao(imc) {
        if (imc < 18.5 && imc > 0) {
            return 'e você está abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            return 'e você está com o peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            return 'e você está acima do peso';
        } else {
            return 'Você está com obesidade';
        }
    }

});

