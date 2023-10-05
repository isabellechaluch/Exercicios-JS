// Selecionar elementos HTML
const newTaskInput = document.getElementById('new-task');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

// Adicionar evento de clique ao botão Adicionar
addButton.addEventListener('click', addTask);

// Função para adicionar uma nova tarefa
function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText === '') return;

    const taskItem = document.createElement('div');
    taskItem.classList.add('task');

    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;

    const deleteButton = createButton('Excluir', deleteTask);
    const completeButton = createButton('Concluir', completeTask);

    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteButton);
    taskItem.appendChild(completeButton);
    taskList.appendChild(taskItem);

    newTaskInput.value = '';
    //Reseta o campo do formulário
}

// Função para criar botões
function createButton(text, clickHandler) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', clickHandler);
    return button;
}

// Função para excluir uma tarefa
function deleteTask() {
    const taskItem = this.parentElement.pa;
    taskList.removeChild(taskItem);
}

// Função para marcar uma tarefa como concluída
function completeTask() {
    const taskItem = this.parentElement;
    taskItem.classList.toggle('completed');
}
