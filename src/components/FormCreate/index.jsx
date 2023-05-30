import React, { useContext, useState } from 'react'
import './FormCreate.scss'
import { v4 as randomId } from 'uuid'
import { Context } from '../../store/context'


const initTodo = {
    id: '',
    title: '',
    status: false
}

const FormCreate = () => {
    
    const {todoList, setTodoList} = useContext(Context)
    
    const [todo, setTodo] = useState(initTodo)

    const handleCreateTodo = (e) => {
        e.preventDefault();
        todo.id = randomId();
        todoList.push(todo);
        setTodoList([...todoList]);
        setTodo({
            ...initTodo
        })
    };

    const handleChangeTitle = (e) => {
        setTodo({
            ...todo,
            title: e.target.value
        })
    };

    return (
        <form className='formCreate'>
            <input
                type="text"
                placeholder='add details'
                className='formCreate__input'
                value={ todo.title}
                onChange={handleChangeTitle}
            />
            <button className='formCreate__btnAdd' onClick={handleCreateTodo }>Add</button>
        </form>
    )
}

export default FormCreate