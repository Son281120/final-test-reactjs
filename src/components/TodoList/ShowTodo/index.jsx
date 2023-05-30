import React from 'react'

const ShowTodo = ({ todoName, status, handleCheck, handleDelete, isDelete }) => {

    return (
        <div className='todoItem'>
            <div className='todoItem_info'>
                <input 
                    type="checkbox"
                    name=""
                    id=""
                    checked={status}
                    onChange={() => {
                        handleCheck()
                    }}
                />
                <label className= {status ? 'input--checked': ''}>{todoName}</label>
            </div>
            {
                isDelete ? <button
                    className='btn_delete'
                    onClick={() => {
                        handleDelete()
                    }}
                >
                    X
                </button> : ''
            }
        </div>
    )
}

export default ShowTodo