import { createContext, useState } from "react";

const Context = createContext()

function Provider({children}){
    const [todoList, setTodoList] = useState([])
    return (
        <Context.Provider value={{todoList, setTodoList}}>
            {children}
        </Context.Provider>
    )
}

export {Context, Provider}