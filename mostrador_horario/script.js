function horaAtual() {
    var dataAtual = new Date();
    var hora = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();
    var segundos = dataAtual.getSeconds();
    var fundo = document.querySelector('.container');
    var gretitlejs = document.querySelector('#gre-title');
    var hour = document.querySelector('#hour');
    var picture = document.querySelector('#img');

    hour.textContent = "Agora são: " + hora + ":" + (minutos < 10 ? "0" + minutos : minutos) + ":" + (segundos < 10 ? "0" + segundos : segundos);

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

horaAtual();