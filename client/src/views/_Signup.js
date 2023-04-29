import React, { useState } from 'react'
const jwt = require('jsonwebtoken')
import jwt from 'jsonwebtoken'

export default function _Signup() {

    //^ State Variables 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignup = async () => {
        //^Passing data to the backend.
        try {
            const res = await fetch('/signup', {
                method: 'POST',
                body: JSON.stringify({ email, password}),
                headers: {'Content-Type': 'application/json'}
            })

        } catch(err) {

        }


        // const url = '/signup'
        // const data = {
        //     email: email,
        //     password: password
        // }
        // const response = await fetch(url, {
        //     method: "POST", 
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data), 
        //   });
        //   console.log(data)
        // return response.json();

       
    }


  return (
    <div>
        <div id="Signup">

        <div className="form-container container">
            <div className="title-container container">
                <h1>Signup</h1>
            </div>
            <div className="email-containe containerr">
                <h2>Email</h2>
                <input type="text" onChange={(e) => {setEmail(e.target.value)}}/>
            </div>
            <div className="password-container container">
                <h2>Password</h2>
                <input type="text" onChange={(e) => {setPassword(e.target.value)}}/>
            </div>
            <div className="btn-container container">
                <button onClick={handleSignup}>Login</button>
            </div>
        </div>
        </div>
    </div>
  )
}
