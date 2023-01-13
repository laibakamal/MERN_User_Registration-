import React,{useState} from "react";
import "./login.css"
import axios from "axios";

const Login=(props)=>
{
    const[user, setUser]=useState({
        email:"",
        password:""
    })

    const handleChange=e=>{
        const{name,value}=e.target
        setUser({
            ...user,    //copying the old state using spread operator ...
            [name]:value
        })
    }


    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res =>  alert(res.data.message)
            // alert(res.data.message)
            // setLoginUser(res.data.user)
            // history.push("/")
        )
    }


    return(
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} placeholder="Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange}></input>
            <div className="button" onClick={login} >Login</div>
            <div>Don't have an account? Then Register now 👇</div>
            <div className="button"  onClick={() => props.handleCurrentViewState("register")}>Register</div>
        </div>
    )
}

export default Login