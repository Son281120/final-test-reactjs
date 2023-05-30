import { createContext, useState } from "react";

const Context = createContext()

function Provider({children}){
    const [todos, setTodos] = useState()
    return (
        <Context.Provider value={{todos, setTodos}}>
            {children}
        </Context.Provider>
    )
}

export {Context, Provider}