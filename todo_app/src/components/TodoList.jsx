import React, { useState } from 'react';
import "./TodoList.css";


const TodoList = () => {
    const[InputValue,setInputValue]=useState("")
    const[Todos,setTodos]=useState([])
    const handleInputChange=(e)=>{
      setInputValue(e.target.value)
    }
    // for Adding tasks
    const handleAddTodos=()=>{
        if(InputValue !==""){
            const newTodo={
                id:Date.now(),
                text:InputValue,
                completed:false
            }
          setTodos([...Todos,newTodo])
          console.log(Todos,newTodo)
        }

    }

    // For Update todos
    const handleToggleChange=(id)=>{
           console.log(id);
       const Updatedtodos=Todos.map((todo)=>{
    if(todo.id===id){
        return{...todo,completed:!todo.completed}
    }
    return todo
});
setTodos(Updatedtodos);
console.log(Updatedtodos)
    }

    // for Removing todos
    const handleToggleRemove=(id)=>{
        const filiteredTodos=Todos.filter((todo)=>todo.id !==id);
        console.log(filiteredTodos);
        setTodos(filiteredTodos);
    };
  return (
    <div>
      <div className="container">
        <h1>Todo List in React</h1>
        <input type='text' className='input-bar'
        value={InputValue} 
         placeholder='Add Your task here '
          onChange={handleInputChange}
        />
        <button className='Add-btn' type='submit' onClick={handleAddTodos}> Add</button>
        <ul className='todo-list'>
            {Todos.map(todo=>(
             
             <li className={`todo-item ${todo.completed==true ? "Completed":""}`}> 
                <input className='checkbox' type='checkbox' onChange={()=>handleToggleChange(todo.id)} />
                <span>{todo.text}</span>
                <button className='remove-btn' on onClick={()=>handleToggleRemove(todo.id)}>Remove</button>
             </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoList;
