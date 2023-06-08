import React from 'react'
import Todoitem from "./Todoitem"

export default function Todos(props) {
    return (
        <div className="text-center">

            <h1 className='text-center'>Todo List</h1>
            {props.todos.length === 0 ? "No todo to display" :
                props.todos.map((todo) => {
                    return <Todoitem todo={todo} key={props.todos.sno} ondelete={props.ondelete} />
                })
            }

        </div>
    )
}
