import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const Form = ({ input, setInput, todos, setTodos, edittodo, setEdittodo }) => {

    const updatetodo = (title, id, completed) => {
        const newtodo = todos.map((todo) =>
            todo.id === id ? { title, id, completed } : todo
        );
        setTodos(newtodo);
        setEdittodo("");
    };

    React.useEffect(() => {
        if (edittodo) {
            setInput(edittodo.title)
        } else {
            setInput('');
        }
    }, [setInput, edittodo])

    const submithandler = (e) => {
        e.preventDefault();
        if (!edittodo) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }])
            setInput("")
        } else {
            updatetodo(input, edittodo.id, edittodo.completed);
            setEdittodo("");
        }

    }

    return (
        <>
            <form onSubmit={submithandler}>
                <input type="text" required
                    placeholder='enter your todo'
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
                <button type='submit'>{edittodo ? "Update" : "Add todo"}</button>
            </form>
        </>
    )
}

export default Form
