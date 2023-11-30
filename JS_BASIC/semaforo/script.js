let semaforoElement = document.querySelector('#picture_semaforo');
let redButton = document.querySelector('#red_button');
let yellowButton = document.querySelector('#yellow_button');
let greenButton = document.querySelector('#green_button');
let autoButton = document.querySelector('#auto_button');
let pictures = ["img/vermelho.png", "img/amarelo.png", "img/verde.png"];
let indice = 0;
let automaticInterval;

// Função para o modo vermelho
function setRedMode () {
    semaforoElement.src = "img/vermelho.png";
    clearInterval(automaticInterval); //Para o modo automático

    // função clearInterval é uma função JavaScript usada para interromper a execução de um intervalo de tempo previamente criado com a função setInterval. Ela recebe como argumento o identificador (geralmente armazenado em uma variável) do intervalo de tempo que você deseja interromper.
}

// Função para o modo amarelo
function setYellowMode () {
    semaforoElement.src = "img/amarelo.png";
    clearInterval(automaticInterval);
}

// Função para o modo verde
function setGreenMode () {
    semaforoElement.src = "img/verde.png";
    clearInterval(automaticInterval);
}

// Função para o modo automático, troca de cores sozinho
function startAutomatic () {
    automaticInterval = setInterval(() => {
        semaforoElement.src = pictures[indice];
        indice = (indice + 1) % pictures.length;
    }, 3000);   // Chama a função automatic novamente após 3 segundos

    // setInterval é uma função JavaScript que executa uma função (ou um trecho de código) em intervalos regulares, especificados em milissegundos. Neste caso, a função anônima (definida usando uma função de seta () => {...}) será executada a cada 3000 milissegundos 
}

redButton.addEventListener('click', setRedMode);
yellowButton.addEventListener('click', setYellowMode);
greenButton.addEventListener('click', setGreenMode);
autoButton.addEventListener('click', startAutomatic);