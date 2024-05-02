let add_button = document.querySelector('#button_form_add');
let final_button = document.querySelector('#button_end');
let show = document.querySelector('.show_box');
let result = document.querySelector('.results_box');
let numbersAdded = [];

// Adiciona o número ao array
function addNumber () {
    let number = parseInt(document.querySelector('#number_form').value);
    let formField = document.querySelector('form');

    try {
        if (isNaN(number)) throw "adicione apenas números";
        if (numbersAdded.includes(number)) throw "o valor digitado já existe!";
        if (number > 100) throw "o valor não pode ser maior que 100!"
        
        numbersAdded.push(number); //Add um número ao array
        show.textContent = (numbersAdded);
        formField.reset(); //Reseta o campo do formulário após adicionar o número
        } catch (error) {
            window.alert('Erro: ' + error);
        }
};

// Função para calcular o tamanho do array
function calculateSize(array) {
    return array.length;
}

// Função para encontrar o número maior
function findMax(array) {
    if (array.length === 0) {
        return null;
    }
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

// Função para encontrar o número menor
function findMin(array) {
    if (array.length === 0) {
        return null;
    }
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

// Função para calcular a soma dos valores
function calculateSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// Função para calcular a média dos valores
function calculateAverage(array) {
    if (array.length === 0) {
        return null;
    }
    return calculateSum(array) / array.length;
}

// Função para ordenar os números em ordem crescente
function sortAscending(array) {
    return array.slice().sort(function(a, b) {
        return a - b;
    });
}

// Função para ordenar os números em ordem decrescente
function sortDescending(array) {
    return array.slice().sort(function(a, b) {
        return b - a;
    });
}

function analyze() {
    if (numbersAdded.length === 0) {
        result.textContent = 'Adicione algum valor!';
    } else {
        let sizeArray = calculateSize(numbersAdded);
        let max = findMax(numbersAdded);
        let min = findMin(numbersAdded);
        let soma = calculateSum(numbersAdded);
        let media = calculateAverage(numbersAdded);
        let ascendingNumbers = sortAscending(numbersAdded);
        let descendingNumbers = sortDescending(numbersAdded);

        result.innerHTML = 
        `Ao todo temos ${sizeArray} números 
        <br>
        O maior valor é ${max}
        <br>
        O menor valor é ${min}
        <br>
        A soma dos valores é ${soma}
        <br>
        A média dos valores é ${media}
        <br>
        Os números em ordem crescente ficarão ${ascendingNumbers}
        <br>
        Os números em ordem decrescente ficarão ${descendingNumbers}
        `;
    }
}

add_button.addEventListener('click', addNumber);
final_button.addEventListener('click', analyze);