
    const buttons = document.querySelectorAll('.btn');
    const btnC = document.querySelector('.btn-clear');
    const equal = document.querySelector('.btn-equal');
    const deleteBtn = document.querySelector('.btn-delete');
    const screen = document.querySelector('.screen');
    
    let screenValue = "";

    // Aplica a função para cada botão    
    buttons.forEach(function(button) {
      button.addEventListener('click', function (showNumber) {
        let value = showNumber.target.dataset.num;
        screenValue += value;
        screen.value = screenValue;
      });
    });

    function showResult() {
      if (screenValue === '' || isNaN(screenValue)) {
        screen.value = "Digite uma expressão";
      } else {
        let answer = eval(screenValue);
        screen.value = answer;
        screenValue = String(answer); // Atualiza screenValue com o resultado como string
      }
    }

    function deleteScreenNumber() {
      screenValue = screenValue.slice(0, -1);
      screen.value = screenValue;
    }

    function clearScreen() {
      screenValue = "";
      screen.value = screenValue;
    }

    equal.addEventListener('click', showResult);
    btnC.addEventListener('click', clearScreen);
    deleteBtn.addEventListener('click', deleteScreenNumber);