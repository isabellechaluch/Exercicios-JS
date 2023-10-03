let button = document.querySelector('#button_form');

function generateImg () {
    
}





















function verify() {
    let ano = document.querySelector('#anoF').value;
    let res = document.querySelector('#resultado');

    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    let genero = ''; // Declare genero variable outside the if/else blocks
    let idade = 0; // Declare idade variable outside the if/else blocks

    if (ano == 0 || ano > anoAtual) {
        res.textContent = 'Verifique os dados e tente novamente';
    } else {
        let radios = document.querySelectorAll('input[name="opcao"]');
        idade = anoAtual - ano; // Calculate age
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (radios[0].checked) {
            genero = 'Homem'; // Set genero to 'Homem'

            if (idade >= 0 && idade < 18) {
                // crianca
                img.setAttribute('src', 'img/menino.jpg');
            } else if (idade >= 18 && idade < 60) {
                // jovem
                img.setAttribute('src', 'img/homem.jpg');
            } else {
                // idoso
                img.setAttribute('src', 'img/idoso.jpg');
            }

        } else if (radios[1].checked) {
            genero = 'Mulher'; // Set genero to 'Mulher'

            if (idade >= 0 && idade < 18) {
                // crianca
                img.setAttribute('src', 'img/menina.jpg');
            } else if (idade >= 18 && idade < 60) {
                // jovem
                img.setAttribute('src', 'img/mulher.jpg');
            } else {
                // idosa
                img.setAttribute('src', 'img/idosa.jpg');
            }
        }

        res.textContent = 'Detectamos ' + genero + ' com ' + idade + ' anos';
        res.appendChild(img);
    }
}


