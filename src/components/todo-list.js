import React from 'react'
import TodoListItem from './todo-list-item'

const TodoList = () =>{
    return (
        <ul>
            <li><TodoListItem label = "Drink Coffee"/></li>
            <li><TodoListItem label = "Learn React" important/></li>
            <li><TodoListItem label = "Create an awesome app :)"/></li>
        </ul>
    );
};

export default TodoList;