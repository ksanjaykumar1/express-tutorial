const express = require('express')
const app = express()
const morgan = require('morgan')

const people = require('./routes/people')

app.use(morgan('tiny'))
app.use(express.urlencoded({extended:false}))

app.use(express.static('./methods-public'))

app.use('/api/people', people)

// to parse json
app.use(express.json())




app.post('/login',(req,res)=>{
    // console.log(req.body.name)
    const {name}= req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('please provide valid credentials ')
})



app.listen(5000, ()=>{
    console.log("Server listening on port 5000")
})