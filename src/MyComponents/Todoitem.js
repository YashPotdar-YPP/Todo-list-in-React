import React from 'react'

export default function Todoitem({ todo, ondelete }) {
    return (
        <div className='d-flex justify-content-center mt-5'>
            <h6 className='mx-4 ms-0'>{todo.title}</h6>
            <button className="btn btn-danger btn-sm" onClick={() => { ondelete(todo) }}> Delete</button>
        </div>
    )
}
