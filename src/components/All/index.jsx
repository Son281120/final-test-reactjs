import React from 'react'
import FormCreate from '../FormCreate'
import TodoList from '../TodoList'


const All = () => {
    return (
        <div className='all'>
            <FormCreate />
            <TodoList statusList = "all"/>
        </div>
    )
}

export default All