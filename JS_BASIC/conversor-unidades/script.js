let convertButton = document.querySelector('#enter-button');
let output = document.querySelector('.output');

function convert() {
    let number = parseFloat(document.querySelector('#form-number').value);
    let fromUnit = document.querySelector('#from-select').value;
    let toUnit = document.querySelector('#to-select').value;
    let unity;
    let calc;

    if (isNaN(number)) {
        output.textContent = "Por favor, digite um número válido";
        // return;
    } else {

        // Transforma o valor de entrada em metros
        switch (fromUnit) {
            case "m":
                calc = number;
                break
            case "km":
                calc = multiply(number, 1000);
                break
            case "cm":
                calc = divide(number, 100);
                break
            case "mm":
                calc = divide(number, 1000);
                break
        }

        // Transforma o valor em metros no valor de saída

        switch (toUnit) {
            case "m":
                calc = calc;
                unity = "m";
                break
            case "km":
                calc = divide(calc, 1000);
                unity = "km";
                break
            case "cm":
                calc = multiply(calc, 100);
                unity = "cm";
                break
            case "mm":
                calc = multiply(calc, 1000);
                unity = "mm";
                break
        }

        output.textContent = `${calc} ${unity}`;
    }

    function multiply(value, factor) {
        return value * factor;
    }

    function divide(value, factor) {
        return value / factor;
    }
}

convertButton.addEventListener('click', convert);