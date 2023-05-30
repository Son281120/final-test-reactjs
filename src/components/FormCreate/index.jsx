import React from 'react'
import './FormCreate.scss'
const FormCreate = () => {
    return (
        <form className='formCreate'>
            <input
                type="text"
                placeholder='add details'
                className='formCreate__input'
            />
            <button className='formCreate__btnAdd'>Add</button>
        </form>
    )
}

export default FormCreate