import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from "react-router-dom";


//& Importing SASS style sheets
import "./styles/styles.css"

//^ Importing Views
import Home from './views/Home';
import Login from './views/Login';
import _Signup from './views/_Signup';

export default function App() {

	const refreshCount_Redux = useSelector((state) => state.todo.refreshCount)

	//^ Importing the array from REDUX.




	//^ Fetching todos from the API
	useEffect(() => {
		fetch("/api/todos")
		.then(res => res.json())
		.then((data) => {

		console.log(data.todosGet)
		console.log(data.todosGet[0])
	  })

	},[refreshCount_Redux])
  	return (
    	<div id="App">

			<div className="header-container">
				{/* <Header/> */}
			</div>

			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/login" element={<Login/>}/>
				<Route path="/signup" element={<_Signup/>}/>
			</Routes>

		</div>
  	)
}
