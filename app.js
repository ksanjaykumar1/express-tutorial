const express = require('express');
const app = express()
const logger = require('./logger')

// req=> middleware => res
// middileware should pass it next to middleware or back to the route , terminate by sending message,

// express passes req,res to the middleware
app.get('/',logger,(req,res)=>{
    res.send('Home')
})

app.get('/about',logger,(req,res)=>{
    res.send('About')
})

app.listen(5000, ()=>{
    console.log("Server listening at 5000")
})