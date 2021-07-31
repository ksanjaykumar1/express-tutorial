const express = require('express');
const app = express()


// req=> middleware => res
// middileware should pass it next to middleware or back to the route , terminate by sending message,
const logger = (req,res,next)=>{
    const method = req.method;
    const url = req.url;
    const year = new Date().getFullYear();
    console.log(method,url,year)
    //res.send("logger")
    next()
}
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