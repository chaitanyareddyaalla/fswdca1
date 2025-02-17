const express = require("express");
const app = express();
const PORT =8000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello,express server is running")
});

app.listen(PORT,()=>{
    console.log(`express is running at http://localhost:${PORT}`)
});

app.post('/signup',(req,res)=>{
    const {Username, Email, Password, DateofBirth} = req.body
    if(!Username){
        return res.status(400).json({error:"Username cannot be empty"})
    }
    if(!Email){
        return res.status(400).json({error:"Email cannot be empty"})
    }
    if(!Password){
        return res.status(400).json({error:"Password cannot be empty"})
    }
    if(Password.length>8 && Password.length<=16){
        return res.status(400).json({error:"Password length should be greater than 8 or less than or equall to 16"})
    }
    res.status(201).json({
        message : "user signedup successfully",
        user :{
            Username,
            Email,
            DateofBirth
        }
    })
})