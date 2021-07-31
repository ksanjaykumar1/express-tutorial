const express = require('express')
const app = express()
const morgan = require('morgan')
app.use(morgan('tiny'))



app.listen(5000, ()=>{
    console.log("Server listening on port 5000")
})