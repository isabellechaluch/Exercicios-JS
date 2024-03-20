let addTaskButton = document.querySelector('#button_add_form');
let showTasks = document.querySelector('#show_box');
let form = document.querySelector('form');
// let taskBoxes = document.querySelectorAll('.task_box');
let isDragging = false;
let setX, setY, dragTask;
//Criar a div da task
function createDiv () {
    let div = document.createElement('div');
    div.classList.add('task_box');
    return div;
}

//Criar <p> para o texto da task
function createText (text) { //Recebe o parâmetro texto da task
    let textTask = document.createElement('p');
    textTask.classList.add('text-box');
    textTask.textContent = text;
    return textTask;
}

//Criar div dos botões
function createButtonsDiv () {
    let buttonsBox = document.createElement('div');
    return buttonsBox;
}

//Criar botão de riscar tarefa
function createCheckButton () {
    let checkTask = document.createElement('button');
    checkTask.textContent = 'Finished';
    checkTask.classList.add('check-button');
    checkTask.id = 'button_check';
    return checkTask;
}

//Criar botao para excluir task
function createDeleteButton () {
    let removeTask = document.createElement('button');
    removeTask.textContent = 'Remove';
    removeTask.classList.add('remove-task-button')
    removeTask.id = 'button_remove';
    return removeTask;
}

//Cria a tarefa
function addTask () {
    let task = document.querySelector('#task_form').value;

    if (task === '') return; //Se a tarefa estiver vazia, encerra a função

    //Chamada das funções para criar elementos
    let newDiv = createDiv();
    let newText = createText(task);
    let newButtonsbox = createButtonsDiv();
    let newCheckButton = createCheckButton();
    let newDelButton = createDeleteButton();

   //Adicionar elementos criados
   showTasks.appendChild(newDiv);
   newDiv.appendChild(newText);
   newDiv.appendChild(newButtonsbox);
   newButtonsbox.appendChild(newCheckButton);
   newButtonsbox.appendChild(newDelButton);

   form.reset();
   
   newCheckButton.addEventListener('click', finishTask);
   newDelButton.addEventListener('click', deleteTask);
}

function finishTask () {
    let itemtoFinish = this.parentElement.parentElement;
    itemtoFinish.classList.add('checked-task');
}

function deleteTask () {
    const itemtoDelete = this.parentElement.parentElement; 
    showTasks.removeChild(itemtoDelete);
    //this se refere ao botao e parentelement.parentElement ao elemento pai do seu elemento pai 
    //remove o elemento filho selecionado anteriormente do elemento showTasks
}

//Arrastar e soltar as tasks

// document.addEventListener('mousedown', (e) => {
//     if (e.target.classList.contains('task_box')) {
//         isDragging = true;
//         dragTask = e.target;
//         setX = e.clientX - dragTask.getBoundingClientRect().left;
//         setY = e.clientY - dragTask.getBoundingClientRect().top;
//     }
// });

// taskBoxes.forEach(taskBox => {
//     taskBox.addEventListener('mousedown', (e) => {
//         if(e.target.classList.contains('task_box')) {
//             isDragging = true;
//             dragTask = e.target;
//             setX = e.clientX - taskBox.getBoundingClientRect().left;
//             setY = e.clientY - taskBox.getBoundingClientRect().top;
//         }
//     });
// });

// document.addEventListener('mousemove', (e) => {
//     if (isDragging) {
//         const x = e.clientX - setX;
//         const y = e.clientY - setY;
//         dragTask.style.left = `${x}px`;
//         dragTask.style.top = `${y}px`;
//     }
// });

// document.addEventListener('mouseup', () => {
//     if(isDragging) {
//         isDragging = false;
//     }
// });

addTaskButton.addEventListener('click', addTask);
