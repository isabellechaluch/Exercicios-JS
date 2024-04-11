function gerarSenha() {
  const output = document.querySelector(".password-output");
  const passwordSize = document.querySelector("#password-length").value;
  const upperCaseSelect = document.querySelector("#upper-select");
  const lowerCaseSelect = document.querySelector("#lower-select");
  const numbersSelect = document.querySelector("#numbers-select");
  const symbolsSelect = document.querySelector("#simbols-select");
  let possibleCharacters = "";
  let password = "";

  // Tratamento de erros
  if (passwordSize == 0 || isNaN(passwordSize)) {
    output.innerText = "A senha deve ser maior que 0!";
    return;
  }

  // Selecionando caracteres possíveis
  if (upperCaseSelect.checked) {
    possibleCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (lowerCaseSelect.checked) {
    possibleCharacters += "abcdefghijklmnopqrstuvwxyz";
  }

  if (numbersSelect.checked) {
    possibleCharacters += "0123456789";
  }

  if (symbolsSelect.checked) {
    possibleCharacters += "!@#$%^&*()_-+=<>?/[]{}|";
  }

  // Tratamento de erros- pelo menos uma opção deve ser selecionada
  if (possibleCharacters == "") {
    output.innerText = "Selecione pelo menos uma das opções!";
    return;
  }

  // Gerar a senha
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
      alert("Erro ao copiar o texto: ", err);
    })

  // o bloco then é utilizado para lidar com o caso de sucesso (a Promise foi resolvida), enquanto o bloco catch é utilizado para lidar com falhas (a Promise foi rejeitada, indicando um erro).
}