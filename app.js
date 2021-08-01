const express = require('express')
const app = express()
const morgan = require('morgan')

const people = require('./routes/people')
const auth = require('./routes/auth')

app.use(morgan('tiny'))
app.use(express.urlencoded({extended:false}))
// to parse json
app.use(express.json())
app.use(express.static('./methods-public'))

app.use('/api/people', people)
app.use('/login',auth)



app.listen(5000, ()=>{
    console.log("Server listening on port 5000")
})