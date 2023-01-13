import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app=express()
app.use(express.json())
app.use(express.urlencoded( { extended: true } ))
app.use(cors())

mongoose.connect("mongodb://localhost:27017/userRegistration",
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}, () =>
{
    console.log("MongoDB database connection established successfully")
})



const userSchema=new mongoose.Schema(
    {
        name:String,
        email:String,
        password:String
    }
)

const User= new mongoose.model("User",userSchema)

//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 


app.post("/register",(req,res)=>
{
    const {name, email, password}=req.body
    User.findOne({email:email},(err,user) => {
        if(user)
        {
            res.send({message: "User already exists"})
        }
        else
        {
            const user=new User(
                {
                    name,
                    email,
                    password
                })
            user.save(err=>{
                if(err){
                    res.send(err)
                }
                else
                {
                    res.send({message:"User registered successfully"})  
                }
            })
        }
    })
})


app.listen(9002,()=>
{
    console.log("Server is running on port 9002")
}
)





// //Routes

// app.get("/",(req,res)=>
// {
//     res.send("Login")
// }
// )

// app.post("/",(req,res)=>
// {
//     res.send("Login")
// })

// app.get("/login",(req,res)=>
// {
//     res.send("Login")
// }
// )
// app.post("/login",(req,res)=>
// {
//     res.send("Login")
// })

// app.post("/register",(req,res)=>
// {
//     res.send("Register")
//     console.log("register")
// })




// app.listen(9002,()=>
// {
//     console.log("Backend started at port 9002")
// })