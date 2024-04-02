let button = document.querySelector('#button_form');

function generateElement () {
    let elementType = document.querySelector('#tag_form').value;
    let elementContent = document.querySelector('#content_element').value;
    let output = document.querySelector('#output');

    let newElement;

    switch (elementType) {
        case 'div':
            newElement = document.createElement('div');
            break;
        case 'img':
            newElement = document.createElement('img');
            newElement.src = elementContent;
            break;
        case 'h2':
            newElement = document.createElement('h2');
            break;
        case 'p':
            newElement = document.createElement('p');
            break
        default:
            newElement = document.createElement('div');
            break
    }

    if (elementType !== 'img') {
        newElement.textContent = elementContent;
    }

    output.appendChild(newElement);
}

button.addEventListener('click', generateElement);





