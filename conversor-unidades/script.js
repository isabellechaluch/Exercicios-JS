let convertButton = document.querySelector('#enter-button');
let output = document.querySelector('.output');

function convert() {
    let number = document.querySelector('#form-number').value;
    let fromUnit = document.querySelector('#from-select').value;
    let toUnit = document.querySelector('#to-select').value;
    let calc;

    if (isNaN(number)) {
        output.textContent = "Por favor, digite um número válido"
    } 

    // Transforma o valor de entrada em metros
    switch (fromUnit) {
        case "m":
            calc = number;
            break
        case "km":
            calc = number * 1000;
            break
        case "cm":
            calc = number / 100;
            break
        case "mm":
            calc = number / 1000;
            break
    }

    // Transforma o valor em metros no valor de saída

    switch (toUnit) {
        case "m":
            calc = calc;
            break
        case "km":
            calc = calc / 1000;
            break
        case "cm":
            calc = calc * 100;
            break
        case "mm":
            calc = calc * 1000;
            break
    }

    output.textContent = calc;
}

convertButton.addEventListener('click', convert);