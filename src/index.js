import React from 'react'
import ReactDOM from 'react-dom'

const TodoList = () =>{
    return (
        <ul>
            <li>Drink coffee</li>
            <li>Learn React</li>
            <li>Create an awesome app :)</li>
        </ul>
    );
};

const AppHeader = () => {
    return <h1>My todo list</h1>;
};

const SearchPanel = () => {
    return <input placeholder="search"/>;
};

const App = () => {
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
