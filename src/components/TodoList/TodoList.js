import React, { useState, useCallback } from 'react';
import {NewTodoForm} from './NewTodoForm';
import {TodoItem} from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState();

    const addTodo = useCallback((newTodo) => {
        setTodos([...todos, newTodo]);

        setSelectedIndex(undefined);
    }, [todos]);

    const removeTodo = useCallback((index) => {
        setSelectedIndex(undefined);

        setTodos([
            ...todos.slice(0, index),
            ...todos.slice(index + 1),
        ]);
    }, [todos]);

    const updateSelectedTodo = useCallback((newTodo) => {
        setTodos([
            ...todos.slice(0, selectedIndex), 
            newTodo, 
            ...todos.slice(selectedIndex + 1),
        ]);

        setSelectedIndex(undefined);
    }, [selectedIndex, todos]);


    return (
        <div className='todo'>
            <h1>To Do List</h1>
            <NewTodoForm addTodo={addTodo}/>
            {!todos.length && (
                <div>No todos defined :(</div>
            )}
            {todos.length && (
                <ul className='todo-list'>
                    {todos.map((todo, index) => (
                        <TodoItem 
                            todo={todo}
                            key={`${todo}-${index}`} 
                            isSelected={selectedIndex === index} 
                            index={index} 
                            onSelect={setSelectedIndex}
                            onDelete={removeTodo}
                            onUpdate={updateSelectedTodo}
                        />
                    ))}
                </ul>
            )}
        </div>
    )
};

export {TodoList};
