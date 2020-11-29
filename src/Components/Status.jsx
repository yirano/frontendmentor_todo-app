import React from 'react'

const Status = (props) => {

    const handleClear = () => {
        localStorage.setItem('todo', JSON.stringify(props.todo.filter(t => t.completed == false)))
        props.setTodo(JSON.parse(localStorage.getItem('todo')))
    }

    return (
        <div className="status">
            <div className="length">
                <p>{props.todo.length} items left</p>
            </div>
            <div className="filter">
                <p>All</p>
                <p>Active</p>
                <p>Completed</p>
            </div>
            <div className="clear" onClick={() => handleClear()}>
                <p>Clear Completed</p>
            </div>
        </div>
    )
}

export default Status
