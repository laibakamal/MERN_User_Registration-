import React, {useState} from "react";
import "./register.css"
import axios from "axios"

const Register=(props)=>
{
    const[user, setUser]=useState({
        name:"",
        email:"",
        password:"",
        confirmPass:""
    })

    const handleChange=e=>{
        const{name,value}=e.target
        setUser({
            ...user,    //copying the old state using spread operator ...
            [name]:value
        })
    }

    const register=()=> 
    {
        const {name, email, password,confirmPass}=user

        if(name&&email&&password&&(password===confirmPass))
        {
            axios.post("http://localhost:9002/register",user)
            .then(res=>{
                console.log(res)
            })
        }
        else{
            alert("invalid input")
        }
    }


    return(
        <div className="register">
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange}></input>
            <input type="password" name="confirmPass" value={user.confirmPass} placeholder="Confirm Password" onChange={handleChange}></input>
            <div className="button"  onClick={register}>Register</div>
            <div>Already have an account? 👇</div>
            <div className="button" onClick={() => props.handleCurrentViewState("login")}>Login</div>
        </div>
    )
}

export default Register