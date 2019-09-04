var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer Café',
    'Estudar Java Script',
    'Acessar comunidade'
];

function renderTodos() {
    for (todo of todos) {
        console.log(todo)
    }
}