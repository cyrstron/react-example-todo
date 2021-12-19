import React, {useCallback} from 'react';
import { useState } from 'react';

const TodoItem = ({todo, index, isSelected, onSelect, onUpdate, onDelete}) => {
    const [newValue, setNewValue] = useState(todo);

    const onItemChange = useCallback((e) => {
        const value = e.target.value;

        setNewValue(value);
    }, [])

    const onSubmit = useCallback((e) => {
        e.preventDefault();

        onUpdate(newValue);
    }, [onUpdate, newValue]);

    const onReset = useCallback((e) => {
        e.preventDefault();

        setNewValue(todo);
        onSelect(undefined);
    }, [onSelect, todo]);

    const onItemClick = useCallback(() => {
        onSelect(index);
    }, [index, onSelect]);
    
    const onDeleteClick = useCallback(() => {
        onDelete(index);
    }, [onDelete, index]);

    return (
        <li className='todo-item'>
            {isSelected && (
                <form className='todo-content' onSubmit={onSubmit} onReset={onReset}>
                    <input onChange={onItemChange} value={newValue}/>
                    <div>
                        <button type='submit'>Apply</button>
                        <button type='reset'>Cancel</button>
                    </div>
                </form>
            )}
            {!isSelected && (
                <div className='todo-content'>
                    <span onClick={onItemClick}>{todo}</span>
                    <button onClick={onDeleteClick}>Delete</button>
                </div>
            )}
        </li>
    );
}

export {TodoItem}