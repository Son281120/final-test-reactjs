import React from 'react'
import { NavLink } from 'react-router-dom'



const Menu = () => {

    const activeClass = (params) => {
        return params.isActive ? "active-item" : ""
    }
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/" className={activeClass}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/active" className={activeClass}>
                        Active
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/completed" className={activeClass}>
                        Completed
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu