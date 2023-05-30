import React, { useEffect, useState } from 'react'

const ShowTodo = ({todoName, status, handleCheck, statusList, handleDelete}) => {

    const [isDelete, setIsDelete] = useState(false)
    useEffect(() => {
        if(statusList === "completed"){
            setIsDelete(true)
        } else {
            setIsDelete(false)
        }
    }, [statusList])

    return (
        <div className='todoItem'>
            <input type="checkbox"
                name=""
                id="" 
                checked = {status}
                onChange={() => {
                    handleCheck()
                }}
            />
            <label>{todoName}</label>
            {isDelete ? <button onClick={() => {
                handleDelete()
            }}>X</button> : ''}
        </div>
    )
}

export default ShowTodo