import ShowTodo from './ShowTodo'
import { Context } from '../../store/context'
import { useContext, useEffect, useState } from 'react';
import './TodoList.scss'


const TodoList = ({ statusList }) => {
    const { todoList, setTodoList } = useContext(Context);
    const [arrayRender, setArrayRender] = useState([])
    const [isDelete, setIsDelete] = useState(false)


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

    const handleDeleteAll = () => {
        setTodoList([])
    }

    useEffect(() => {
        if (statusList === "all") {
            setArrayRender(todoList);
            setIsDelete(false);
        } else if (statusList === "active") {
            setArrayRender(todoList.filter(item => item.status === false));
            setIsDelete(false);
        } else if (statusList === "completed") {
            setArrayRender(todoList.filter(item => item.status === true));
            setIsDelete(true);
        }
    }, [statusList, todoList])


    return (
        <div className='todoList'>
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
                        isDelete={isDelete}
                    />
                })
            }
            {
                isDelete ?
                    <button 
                        className='btn_DeleteAll'
                        onClick={() => {
                            handleDeleteAll()
                        }}>
                        Delete all
                    </button> : ''
            }
        </div>
    )
}

export default TodoList