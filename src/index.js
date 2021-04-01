import React from 'react'
import ReactDOM from 'react-dom'

const el = (
    <div>
        <h1>My todo list</h1>
        <input placeholder="search"/>
        <ul>
            <li>Drink coffee</li>
            <li>Learn React</li>
            <li>Create an awesome app :)</li>
        </ul>
    </div>
);
ReactDOM.render(el, document.getElementById('root'));
