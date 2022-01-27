import './styles.css';

import { Todo,TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
//import { Todo } from './classes/todo.class';
//import { TodoList } from './classes/todo-list.class';

export const todoList = new TodoList();

//const tarea = new Todo('aprender javascript!!');
//todoList.nuevoTodo(tarea);

//console.log(todoList);

//crearTodoHtml(tarea);

//localStorage.setItem('mi-key','ABC');
//sessionStorage.setItem('mi-key','ABC');

//localStorage.removeItem('mi-key');

todoList.todos.forEach( todo => crearTodoHtml(todo) );

console.log('todos', todoList.todos);