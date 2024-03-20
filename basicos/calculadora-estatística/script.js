let add_button = document.querySelector('#button_form_add');
let averageButton = document.querySelector('#button_average');
let modeButton = document.querySelector('#button_mode');
let medianButton = document.querySelector('#button_median');
let deviationButton = document.querySelector('#button_deviation');
let clearFormButton = document.querySelector('#button_form_clear');
let clearResultButton = document.querySelector('#button_results_clear');

let table = document.querySelector('#numbers-table');
let result = document.querySelector('.results_box');
let numbersAdded = [];

// Adiciona o número ao array e à tabela
function addNumber() {
    let number = parseFloat(document.querySelector('#number_form').value);
    let formField = document.querySelector('form');

    if (isNaN(number)) {
        alert('Insira apenas números!');
    } else {
        numbersAdded.push(number); //Add um número ao array

        let tableRow = document.createElement("tr");
        tableRow.innerHTML = `<td>${number}</td>`;
        table.appendChild(tableRow);
        formField.reset(); //Reseta o campo do formulário após adicionar o número
    }
};

// Faz a verificação do array, se há números adicioandos
// inserir dentro de todas as funçoes!!!!!!!!!!

function checkArray() {
    if (numbersAdded.length === 0) {
        result.textContent = 'Adicione algum valor!';
        return true;
    } 
    return false;
};

function sumNumbers(array) {
    let soma = 0;
    // Faz a soma de todos os números
    for (let i = 0; i < array.length; i++) {
        soma = soma + numbersAdded[i];
    }
    return soma;
};

function calculateAverage(array) {
    if(checkArray()) return;
    let soma = sumNumbers(array);
    let media = (soma / array.length);
    return media;
};

function sortNumbers(array) {
    let sortedNumbers = array.sort((a, b) => a - b);
    return sortedNumbers;
};

function calculateMode() {
    if(checkArray()) return;

    let frequencyMap = {};
    let maxFrequency = 0;
    let moda = [];

    // Contagem da frequência de cada número
    numbersAdded.forEach(number => {
        frequencyMap[number] = (frequencyMap[number] || 0) + 1;
        if (frequencyMap[number] > maxFrequency) {
            maxFrequency = frequencyMap[number];
        }
    });

    // Encontrar os números com a frequência máxima
    for (let number in frequencyMap) {
        if (frequencyMap[number] === maxFrequency) {
            moda.push(parseFloat(number));
        }
    }

    // Se todos os números aparecem a mesma quantidade de vezes
    if (moda.length === numbersAdded.length) {
        showResult("Moda", 'Não há moda. Todos os elementos aparecem a mesma quantidade de vezes.');
    } else {
        showResult("Moda", moda);
    }
}


function calculateMedian() {
    if(checkArray()) return
    let median;
    let sortedNumbers = sortNumbers(numbersAdded);
    // Caso ímpar
    if (sortedNumbers.length % 2 !== 0) { 
        median = sortedNumbers[Math.floor((sortedNumbers.length - 1) / 2)];
    // Caso par
    } else {
        let firstIndex = Math.floor(sortedNumbers.length / 2);
        let secondIndex = firstIndex - 1;
        median = (sortedNumbers[firstIndex] + sortedNumbers[secondIndex]) / 2;
    }
    showResult("Mediana", median);
};


function showResult(nome, valor) {
    let newItem = document.createElement("p");
    newItem.innerHTML = `A ${nome} é ${valor}`;
    result.appendChild(newItem);
}

// Há um erro nessa função, quando todos os numeros sao iguais, nao retorna 0
function calculateDeviation() {
    if(checkArray()) return;
    let initialAverage = calculateAverage(numbersAdded);
    let newArray = [];
    let newAverage;
    let deviation;
    for(let i = 0; i < numbersAdded.length; i++) {
        newArray.push((numbersAdded[i] - initialAverage)**2);
    }
    newAverage = calculateAverage(newArray);
    deviation = Math.sqrt(newAverage);
    showResult("Desvio padrão", deviation);
}

function clearTable() {
    // Obtém todas as linhas da tabela, exceto a primeira (cabeçalho)
    let rows = table.querySelectorAll('tr:not(:first-child)');
    // Remove cada linha da tabela
    rows.forEach(row => {
        row.remove();
    });
    numbersAdded = [];
}

function clearResult() {
    result.textContent = "";
}

add_button.addEventListener('click', addNumber);
averageButton.addEventListener('click', function () {
    let media = calculateAverage(numbersAdded);
    showResult("média", media);
});
modeButton.addEventListener('click', calculateMode);
medianButton.addEventListener('click', calculateMedian);
deviationButton.addEventListener('click', calculateDeviation);
clearFormButton.addEventListener('click', clearTable);
clearResultButton.addEventListener('click', clearResult);

