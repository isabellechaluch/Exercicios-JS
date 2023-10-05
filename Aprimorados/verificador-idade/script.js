let button = document.querySelector('#button_form');

// Define a imagem
function setImg (idade, sexo) {

    if (idade >= 0 && idade < 18) {
        // Criança
        return sexo === 'Homem' ? 'img/menino.jpg' : 'img/menina.jpg'; 
        // Operador ternario, o genero é homem? Sim, retorna img menino, não retorna img menina

    } else if (idade >= 18 && idade < 60) {
        // Jovem
        return sexo === 'Homem' ? 'img/homem.jpg' : 'img/mulher.jpg';

    } else {
        // Idoso
        return sexo === 'Homem' ? 'img/idoso.jpg' : 'img/idosa.jpg';
    }
}

// Calcula idade, define sexo e gera a imagem
function verify () {
    let ano = document.querySelector('#anoF').value;
    let res = document.querySelector('#resultado');
    let radios = document.querySelectorAll('input[name="opcao"]');
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    if (ano == 0 || ano > anoAtual) {
        res.textContent = 'Verifique os dados e tente novamente';
    } else {
        let sexo = radios[0].checked ? 'Homem' : 'Mulher';
        // Operador ternario, o primeiro radio foi marcado? Sim, retorna Homem, não retorna Mulher

        let idade = anoAtual - ano; // Calculate age

        res.textContent = 'Detectamos ' + sexo + ' com ' + idade + ' anos';

        var img = document.createElement('img');
        img.src = setImg(idade, sexo);
        img.setAttribute('id', 'foto'); // Cria um ID e atribui o nome "foto"
        res.appendChild(img);
    }

}

button.addEventListener('click', verify);


