function gerarSenha() {
  let output = document.querySelector(".password-output");
  let passwordSize = document.querySelector("#password-length").value;
  let upperCaseSelect = document.querySelector("#upper-select");
  let lowerCaseSelect = document.querySelector("#lower-select");
  let numbersSelect = document.querySelector("#numbers-select");
  let simbolsSelect = document.querySelector("#simbols-select");
  let possibleCharacters = "";
  let password = "";

  
  if (passwordSize == 0) {
    output.innerText = "A senha deve ser maior que 0!";
    return;
  }

  if (upperCaseSelect.checked) {
    possibleCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (lowerCaseSelect.checked) {
    possibleCharacters += "abcdefghijklmnopqrstuvwxyz";
  }

  if (numbersSelect.checked) {
    possibleCharacters += "0123456789";
  }

  if (simbolsSelect.checked) {
    possibleCharacters += "!@#$%^&*()_-+=<>?/[]{}|";
  }

  if (possibleCharacters == "") {
    output.innerText = "Selecione pelo menos uma das opções!";
    return;
  }

  for (let i = 0; i < passwordSize; i++) {
    let indice = Math.floor(Math.random() * possibleCharacters.length);
    password += possibleCharacters.charAt(indice);
  }

  output.innerText = password;
}

function copiarTexto() {
  let textDiv = document.querySelector(".password-output").innerText;

  navigator.clipboard.writeText(textDiv)
    .then(function () {
      alert("Texto copiado para a área de transferência");
    })

    .catch(function (err) {
      console.error("Erro ao copiar o texto: ", err);
    })

  // o bloco then é utilizado para lidar com o caso de sucesso (a Promise foi resolvida), enquanto o bloco catch é utilizado para lidar com falhas (a Promise foi rejeitada, indicando um erro).
}