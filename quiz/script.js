const verify = document.querySelector('#verificar');
verify.addEventListener('click', function () {
    const perguntas = document.querySelectorAll('.pergunta');
    const respostasCorretas = ['c', 'c', 'b', 'b', 'a']; // Respostas corretas para cada pergunta
    const resultado = document.querySelector('#resultado');
    let pontuacao = 0;
    let respostas = [];

    // Verifica as respostas
    for (let i = 1; i <= 5; i++) {
        let respostaSelecionada = document.querySelector(`input[name="resposta${i}"]:checked`);

        // Adiciona a resposta ao array se selecionada
        if (respostaSelecionada) {
            respostas.push(respostaSelecionada.value);
        } else {
            respostas.push('');
        }
    }

    // Calcula a pontuação
    for (let i = 0; i < respostas.length; i++) {
        if (respostas[i] == respostasCorretas[i]) {
            pontuacao++;
            let newElement = document.createElement('div');
            newElement.textContent = 'Você acertou!';
            newElement.classList.add('corretas')
            perguntas[i].appendChild(newElement);
        }
    }

    // Exibe a pontuação na div "resultado"
    resultado.classList.add('box-resultado');
    resultado.innerHTML = `Você acertou ${pontuacao} de 5 perguntas.`;
});

