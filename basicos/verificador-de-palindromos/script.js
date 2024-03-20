let checkButton = document.querySelector("#check-button");
let generateWordButton = document.querySelector("#generate-button");
let palindromesArray = [
    'radar',
    'natan',
    'oso',
    'amor a roma',
    'reter',
    'reviver',
    'arara',
    'osso',
    'luz azul',
    'mirim',
    'omissíssimo',
    'salas',
    'oco',
    'asa',
    'reger',
    'surus',
    'anilina',
    'natan',
    'subi no onibus'
];

function checkWord() {
    let wordToCheck = document.querySelector("#word-form").value;
    wordToCheck = wordToCheck.replace(/\s/g, "");
    if (wordToCheck == "" || !isNaN(wordToCheck)) {
        alert("Por favor, insira uma palavra!")
    } else {
        let outputBox = document.querySelector(".output-word");
        let arrayWord = wordToCheck.split('').reverse().join('').toUpperCase(); // Divide a palavra e transforma em um array contendo cada letra, reverte e transforma de volta em string
        wordToCheck = wordToCheck.toUpperCase();
        let frase;
        if (wordToCheck == arrayWord) {
            frase = "A palavra digitda é um palíndromo!";
        } else {
            frase = "A palavra digitada não é um palíndromo!"
        }
        let outputAnswer = frase + "<br>" + `Palavra digitada: ${wordToCheck.toUpperCase()}` + "<br>" + `Palavra Invertida: ${arrayWord}`;
        showOutput(outputBox, outputAnswer);
    }
}

function showOutput (local, content) {
    local.innerHTML = content;
}

function pickWord() {
    let outputWord = document.querySelector(".output-palindrome");
    let randomIndex = Math.floor(Math.random() * palindromesArray.length);
    randomWord = palindromesArray[randomIndex].toUpperCase();
    showOutput(outputWord, randomWord);
}

checkButton.addEventListener('click', checkWord);
generateWordButton.addEventListener('click', pickWord);

