import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import TodoList from './components/todo-list'

const App = () => {
    const todoData = [
        {label: 'Drink Coffee', important: false},
        {label: 'Learn React', important: true},
        {label: 'Create an awesome app :)', important: false}
    ];

    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos = { todoData }/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
