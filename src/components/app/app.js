import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form"
import './app.css';


export default class App extends React.Component {
    maxId = 100;

    state = {
        todoData:[
        	this.createTodoItem('Drink Coffee'),
        	this.createTodoItem('Make Awesome App'),
        	this.createTodoItem('Have a lunch')
        ]
    };

    createTodoItem(label){
    	return {
            label,
            important: false,
            done: false,
            id: this.maxId ++
        };
    };

    deleteItem = (id) => {
        this.setState (({ todoData }) => {
            //find index of element
            const idx = todoData.findIndex((el) => el.id === id);
            // we must not change the state, so we have to create new array, but without element that have to be deleted
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];
            return {
                todoData: newArray
            };
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);
        this.setState (({ todoData }) => {
            const newArray = [...todoData, newItem];
            return {
                todoData: newArray
            };
        })
    };

    toggleProperty(arr, id, propName){
    	const idx = arr.findIndex((el) => el.id === id);
    	const oldItem = arr[idx];
    	const newItem = {...oldItem, [propName]: !oldItem.[propName]};

    	return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    };

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
    		return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
    	}); 
    };

    onToggleDone = (id) => {
    	this.setState(({ todoData }) => {
    		return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
    	});        
    };

    render(){
    	const { todoData } = this.state;
    	const doneCount = todoData
    						.filter((el) => el.done).length;
    	const todoCount = todoData.length - doneCount;
        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={todoData}
                    onDeleted = {this.deleteItem}
                    onToggleImportant = {this.onToggleImportant}
                    onToggleDone = {this.onToggleDone}/>
                <ItemAddForm
                onItemAdded = {this.addItem}/>
            </div>
        );
    }
}

