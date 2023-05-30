import ShowTodo from './ShowTodo'
import { Context } from '../../store/context'
import { useContext, useEffect, useState } from 'react';



const TodoList = ({statusList}) => {
    const { todoList, setTodoList } = useContext(Context);
    const [arrayRender, setArrayRender] = useState([])

    const handleCheckTodo = (id) => {
        const idx = todoList.findIndex(item => item.id === id);
        todoList[idx].status = !todoList[idx].status;
        setTodoList([...todoList])
    };

    const handleDeleteTodo = (id) => {
        const idx = todoList.findIndex(item => item.id === id);
        todoList.splice(idx, 1);
        setTodoList([...todoList]);
    }
    useEffect(() => {
        if (statusList === "all") {
            setArrayRender(todoList);
        } else if (statusList === "active") {
            setArrayRender(todoList.filter(item => item.status === false));
        } else if (statusList === "completed") {
            setArrayRender(todoList.filter(item => item.status === true));
        }
    }, [statusList, todoList])


    return (
        <div>
            {
                arrayRender.map((item) => {
                    return <ShowTodo
                        key={item.id}
                        todoName={item.title}
                        status={item.status}
                        handleCheck={() => {
                            handleCheckTodo(item.id)
                        }}
                        handleDelete={() => {
                            handleDeleteTodo(item.id)
                        }}
                        statusList = {statusList}
                    />
                })
            }
        </div>
    )
}

export default TodoList