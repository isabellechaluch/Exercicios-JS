//Atualiza e mostra a hora atual
function atualizarHora () {
    var dataAtual = new Date();
    var hora = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();
    var segundos = dataAtual.getSeconds();
    var hour = document.querySelector('#hour');
    hour.textContent = "Agora são: " + hora + ":" + (minutos < 10 ? "0" + minutos : minutos) + ":" + (segundos < 10 ? "0" + segundos : segundos);
    //Expressoes minutos e segundos são ternárias, caso minutos seja menor que 0 ela acrescenta um 0 na frente do valor de minutos, caso seja falsa minutos aparece como está.
}

//Atualiza o fundo, a foto e a saudação
function atualizarRecursosGraficos() {
    var hora = new Date().getHours();
    var fundo = document.querySelector('.container');
    var gretitlejs = document.querySelector('#gre-title');
    var picture = document.querySelector('#img');

    //Condicionais atualizam os elementos HTML de acordo com a hora do dia
    if (hora > 5 && hora < 12) {
        fundo.classList.add('container-manha');
        gretitlejs.textContent = 'Bom dia!';
        picture.src = 'img/manha.jpg';

    } else if (hora >= 12 && hora < 18) {
        fundo.classList.add('container-tarde');
        gretitlejs.textContent = 'Boa tarde!';
        picture.src = 'img/tarde.webp';

    } else {
        fundo.classList.add('container-noite');
        gretitlejs.textContent = 'Boa noite!';
        picture.src = 'img/noite.webp';

    }
}

//Chama as duas funções
function horaAtual() {
    atualizarHora();
    atualizarRecursosGraficos();
}

setInterval(horaAtual, 1000); //Atualiza a hora a cada 1 segundo
