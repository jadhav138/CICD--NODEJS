const express = require("express");
const app = express();
require("dotenv").config()

app.get('/api/get',(req,res) => {
    res.send({message:"hello back to nodejs"})
})

app.get('/api/get_user_details',(req,res) => {
    res.send({
        user:{
            name:"JADHAV",
            age:22,
            contact:######
        },env:process.env.NAME
    })
});


app.listen(process.env.PORT,() => {
    console.log("listening to 8000");
})
