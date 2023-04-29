import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


//^ Importing Components
import AddTodo from '../components/AddTodo/AddTodo';
import TodoElement from '../components/TodoElement/TodoElement';
import Header from '../components/Header/Header';


export default function Home() {
    const refreshCount_Redux = useSelector((state) => state.todo.refreshCount)
    const [response, setResponse] = useState()



	//^ Fetching todos from the API
	useEffect(() => {
		fetch("/api/todos")
		.then(res => res.json())
		.then((data) => {
		setResponse(data)
		console.log(data.todosGet)
		console.log(data.todosGet[0])
	  })

	},[refreshCount_Redux])
  return (

    <div>
        <div className="header-container">
            <Header/>
        </div>
        <div className="add-todo-container">
				<AddTodo/>
			</div>

        <div className="todo-element-container">
        {response?.todosGet && response.todosGet.map((todo) => (
            <TodoElement details={todo.details} created={todo.created} _id={todo._id}/>
            
        ))}

        </div>
    </div>
  )
}
