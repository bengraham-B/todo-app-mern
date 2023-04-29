import React, { useState } from 'react'


export default function Login() {
	//^ State Variables 
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
 
	const handleLogin = async () => {
		const url = '/login';
		const data = {
			email: email,
			password: password
		};

		const response = await fetch(url, {
			method: "POST", 
			headers: {
			   "Content-Type": "application/json",
			},

			body: JSON.stringify(data), 
		   });

		   console.log(data);
		return response.json();
	}

  	return (
		<div>
        	<div id="Login">
        		<div className="form-container">
					<div className="title-container">
						<h1>Login</h1>
					</div>

				<div className="email-container">
					<h2>Email</h2>
					<input type="text" onChange={(e) => {setEmail(e.target.value)}}/>
				</div>

				<div className="password-container">
					<h2>Password</h2>
					<input type="password" onChange={(e) => {setPassword(e.target.value)}}/>
				</div>

				<div className="btn-container">
					<button onClick={handleLogin}>Login</button>
				</div>
        	</div>	
        </div>
    </div>
	)
}
