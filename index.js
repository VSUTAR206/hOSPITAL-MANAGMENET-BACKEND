const express = require('express')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 4000







app.get('/',(req,res)=>  {
    res.send("hello")
}   )





app.get("/login",(req,res)=>{
    res.send("hello login ")
})




app.get('/chai',(req,res)=>{
    res.send("chai ")
})


app.listen(PORT ,()=>{
    console.log("aopp styarted at port "+PORT)
})