import React from 'react'
import { useState } from 'react'

export default function AddTodo(props) {
    let [title, setTitle] = useState("");

    let submit = (e) => {
        e.preventDefault();
        if (!title) {
            alert("enter a valid todo")
        }
        else{

            props.addTodo(title)
            setTitle("")
        }
    }
    return (
        <div className='container'>
            <form onSubmit={submit}>

                <div className="mb-3">
                    <h3 className='text-center'>Add your todo here</h3>
                    <input type="text" className="form-control" value={title} onChange={(e) => { setTitle(e.target.value) }} id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary">Add Todo</button>

            </form>
        </div>
    )
}
