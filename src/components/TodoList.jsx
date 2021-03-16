import React, { Component } from 'react'
import axios from "axios";

class TodoList extends (Component) {
  constructor(props) {
    super(props);
    
  }

  borrarElemento = (id) => {
    axios.delete(`http://localhost:8000/todos/${id}`).then((res) =>
        this.props.borrarTodo(res.data)
      )
  }


    render() {

        console.log("render")

        const todos = this.props.todos || [];

        return (
            <div className="todo-list">
            <ul>
              {todos.map((i) => (
                <div>
                <li key={i.id}>
                  {i.todo} 
                  {i.done ? " Hecho ":" Pendiente "}
                  </li>
                  <button onClick={()=>this.borrarElemento(i.id)}>Borrar</button>
                  </div>
              ))}
            </ul>
          </div>
        )
    }
}

export default TodoList