import React from 'react'

export default function Header() {

	const handleLogin = () => {
		window.location.assign('/login') //^ Sends the user to the login view ((1), stackoverflow.com)
	}
	
	const handleSignup = () => {
		window.location.assign('/signup') //^ Sends the user to the signup view ((1), stackoverflow.com)
	}
  return (
    <div id="Header">
		<div className="left-spacer">

		</div>

		<div className="title-container">
			<h1>Todo</h1>
		</div>

		<div className="login-signup-container">
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleSignup}>SignUp</button>
		</div>
	</div>
  )
}

/**
 * Resources Used:
 * (1) https://stackoverflow.com/questions/49721533/how-to-use-the-window-location-assign-with-reactjs : Information regarding window.location.assign()
 */