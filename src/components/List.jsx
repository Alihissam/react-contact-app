import React from 'react'

const List = ({ todos, setTodos, setEdittodo }) => {

    const handlecomplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed }
                } return item;
            })
        )
    }


    const handledelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const handleEdit = (id) => {
        const findtodo = todos.find((todo) => todo.id === id)
        setEdittodo(findtodo);
    }

    return (
        <>
            <div className="local">

                {todos.map((todo) => (
                    <li className='todo-list' key={todo.id}>
                        <input type="text" className={`list ${todo.completed ? 'complete' : ""}`}
                            value={todo.title}
                            onChange={(e) => e.preventDefault()}
                        />

                        <div className="button-container">
                            <button className="view-button" onClick={(e) => handlecomplete(todo)}>View</button>
                        </div>
                        <div className="button-container">
                            <button className="view-edit" onClick={(e) => handleEdit(todo.id)}>Edit</button>
                        </div>
                        <div className="button-container">
                            <button className="view-delete" onClick={(e) => handledelete(todo.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </div>
        </>
    )
}

export default List
