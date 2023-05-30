import React from 'react'
import FormCreate from '../FormCreate'
import TodoList from '../TodoList'

const Active = () => {
    return (
        <div>
            <FormCreate/>
            <TodoList statusList = "active" />
        </div>
    )
}

export default Active