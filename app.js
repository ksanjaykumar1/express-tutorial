const express = require('express')
//path modules comes with node
const path = require('path')
const app = express()

//app.get 
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen

//setup static and middleware
app.use(express.static('./public'))

app.get('/', (req,res)=>{

    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

app.get('/about', (req,res)=>{

    res.send('About page')
})

app.all('*', (req,res)=>{

    res.status(404).send('<h1>resource not fount</h>')
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000')
})