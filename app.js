const express = require('express');
const app = express()
const logger = require('./logger');
const authorize=require('./authorize');

// req=> middleware => res
// middileware should pass it next to middleware or back to the route , terminate by sending message,

// express passes req,res to the middleware
// all app routes will have the middleware logger applied to them
//app.use(logger)
// we can specify logger to specific url sub routes ex: app.use('/api',logger)

//To use pass mutliple middleware in same function use 
app.use([logger,authorize])
app.get('/',(req,res)=>{
    res.send('Home')
})

app.get('/about',(req,res)=>{
    res.send('About')
})

app.get('/api/products',(req,res)=>{
    res.send('Products')
})

app.get('/api/items',(req,res)=>{
    res.send('Items')
})

app.listen(5000, ()=>{
    console.log("Server listening at 5000")
})