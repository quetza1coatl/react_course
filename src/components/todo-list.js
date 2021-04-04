import React from 'react'
import TodoListItem from './todo-list-item'

const TodoList = ( {todos} ) =>{

    const items = todos.map( (item) => {
         // extract id,  remaining properties will be put into an array itemProps
        const { key, ...itemProps } = item;
        return(
        <li key={ key }>
            <TodoListItem {...itemProps} />
        </li>
        )
    });

    return (
        <ul>
            { items }
        </ul>
    );
};

export default TodoList;