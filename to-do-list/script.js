let addTaskButton = document.querySelector('#button_add_form');
let showTasks = document.querySelector('#show_box');
let form = document.querySelector('form');

function addTask () {
    let task = document.querySelector('#task_form').value;
    let newTask;
    let textTask;
    let buttonsBox;
    let checkTask;
    let removeTask;

    if (task === '') return; //Se o campo da task estiver vazio, encerra a função

    // Criar a task
    newTask = document.createElement('div');
    newTask.classList.add('show_box');

    //Criar <p> para o texto da task
    textTask = document.createElement('p');
    textTask.classList.add('text-box');
    textTask.textContent = task;
    
    //Criar div dos botoes
    buttonsBox = document.createElement('div');

    // Criar botão para riscar task
    checkTask = document.createElement('button');
    checkTask.textContent = 'Finished';
    checkTask.classList.add('check-button');
    checkTask.id = 'button_check';

    //Criar botao para excluir task
    removeTask = document.createElement('button');
    removeTask.textContent = 'Remove';
    removeTask.classList.add('remove-task-button')
    removeTask.id = 'button_remove';

    //Adicionar elementos criados
    showTasks.appendChild(newTask);
    newTask.appendChild(textTask);
    newTask.appendChild(buttonsBox);
    buttonsBox.appendChild(checkTask);
    buttonsBox.appendChild(removeTask);

    form.reset();

    checkTask.addEventListener('click', finishTask);
    removeTask.addEventListener('click', deleteTask);
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

addTaskButton.addEventListener('click', addTask);
