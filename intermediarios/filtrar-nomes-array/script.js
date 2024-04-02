let outputArea = document.querySelector(".filtered-names-list");
let names = [
    "Alice", "Bob", "Charlie", "David", "Emma",
    "Frank", "Grace", "Henry", "Ivy", "Jack",
    "Katie", "Liam", "Mia", "Noah", "Olivia",
    "Peter", "Quinn", "Rachel", "Sam", "Tyler",
    "Uma", "Vera", "Walter", "Xavier", "Yara",
    "Zane", "Eva", "Felix", "Gina", "Hector",
    "Isabella", "Jason", "Kim", "Leo", "Nina",
    "Oscar", "Paula", "Victor", "Sophie", "Riley",
    "Lucas", "Natalie", "Ian", "Heather", "Grace",
    "Ethan", "Donna", "Caleb", "Bella", "Logan"
];

function showNames (text) {
    text.forEach(name => {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        outputArea.appendChild(listItem);
    })
}

function addName() {
    let nameToAdd = document.querySelector("#names-input").value;
    if (names.includes(nameToAdd)) {
        alert("Nome já existe!")
    } else {
        names.push(nameToAdd);
        showNames(names);
        alert("Nome adicionado com sucesso!");
    }
}

function filterArray() {
    outputArea.textContent = "";
    let filterToApply = document.querySelector("#filter-input").value;
    let filteredNames = names.filter(name => name.toLowerCase().includes(filterToApply.toLowerCase()));
    showNames(filteredNames);
}

window.addEventListener('load', showNames(names));


