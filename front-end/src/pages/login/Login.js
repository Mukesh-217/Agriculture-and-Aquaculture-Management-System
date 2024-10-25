import React, {useState} from "react"
import "./Login.css"
import axios from "axios"

const Login = () => {


 
     const [ user, setUser] = useState({
         email:"",
         password:""
     })
 
     const handleChange = e => {
         const { name, value } = e.target
         setUser({
             ...user,
             [name]: value
         })
     }
 
     const login = () => {
         axios.post("http://localhost:3001/login", user)
         .then(res => {
             alert(res.data.message)
             
         })
     }
    return (
        <center>
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <br></br>
            
            <div></div>
            <a className="button" href="/#home" onClick={login}> Login</a>
            <div></div>
            <br></br>
            <div></div>
            <div>or</div>            
            <br></br>
            <a href="/register" class="button">Register</a>
        </div>
        </center>
    )
}

export default Login