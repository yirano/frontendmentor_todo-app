import React, { useState } from 'react'

const initialState = {
    task: "",
    completed: false,
    id: new Date().valueOf()
}

const Form = () => {
    const [form, setForm] = useState(initialState)
    const [todo] = useState(JSON.parse(localStorage.getItem('todo')) || [])


    const handleSubmit = (e) => {
        setForm(JSON.parse(localStorage.getItem('todo')))
        todo.push(form)
        localStorage.setItem('todo', JSON.stringify(todo))
    }

    return (
        <div className="form-group">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="task" value={form.task} onChange={e => setForm({ ...form, [e.target.name]: e.target.value })} placeholder="Create a new todo..." />
            </form>
        </div>
    )
}

export default Form
