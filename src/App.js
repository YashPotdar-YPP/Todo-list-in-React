import './App.css';
import { useState, useEffect } from 'react'
import Todos from "./MyComponents/Todos"
import AddTodo from "./MyComponents/AddTodo"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


function App() {
  let initTodo;
  if (localStorage.getItem("todo") === null) {
    initTodo = []
  } else {
    initTodo = JSON.parse(localStorage.getItem("todo"))
  }
  let Delete = (todo) => {
    console.log("worked", todo);
    setTodos(todos.filter((e) => {
      return e !== todo
    }))

    localStorage.setItem("todo", JSON.stringify(todos))

  }
  let addTodo = (title) => {
    let sno;
    console.log("Worked", title);
    if (todos.length === 0) {
      sno = 1
    }
    else {
      sno = todos[todos.length - 1].sno + 1
    }
    let myTodo = {
      title: title,
      sno: sno
    }
    setTodos([...todos, myTodo])
    console.log(myTodo)
  }

  let [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos))
  }, [todos])
  return (
    <>
      <Router>
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} ondelete={Delete} />
      </Router>

    </>

  );
}

export default App;
