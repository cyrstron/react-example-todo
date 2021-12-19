import React, { useCallback } from 'react';
import { useState } from 'react';

const NewTodoForm = ({addTodo}) => {
    const [newTodo, setNewTodo] = useState('');

    const onChange = useCallback((e) => {
        const value = e.target.value;

        setNewTodo(value);
    }, []);

    const onSubmit = useCallback((e) => {
        e.preventDefault();

        addTodo(newTodo);
        setNewTodo('');
    }, [addTodo, newTodo]);

    const onReset = useCallback((e) => {
        e.preventDefault();

        setNewTodo('');
    }, [])

    return (
        <form onSubmit={onSubmit} onReset={onReset}>
            <input onChange={onChange}  value={newTodo}/>
            <button type='submit'>+</button>
            <button type='reset'>Reset</button>
        </form>
    )
}

export {NewTodoForm};