const express = require('express')
const app = express()
const morgan = require('morgan')
let {people} = require('./data')


app.use(morgan('tiny'))
app.use(express.urlencoded({extended:false}))

app.use(express.static('./methods-public'))

// to parse json
app.use(express.json())

app.get('/api/people', (req,res)=>{
    res.status(200).json({success:true,data:people})
})

app.post('/login',(req,res)=>{
    // console.log(req.body.name)
    const {name}= req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('please provide valid credentials ')
})

app.post('/api/people',(req,res)=>{
    const {name} =req.body
    if(!name)
    {
        return  res.status(401).json({success:false,msg:'please provide name value'})
    }
    
    res.status(201).json({success:true,person:name})
})

app.post('/api/postman/people',(req,res)=>{

    const {name} = req.body
    if(!name){
        return res.status(401).json({success:false,msg:'please provide name'})
    }
    res.status(200).json({success:true,dat:[...people,name]})
})

//
app.put('/api/people/:id',(req,res)=>{

    const {id} = req.params
    const {name} = req.body

    let person = people.find((p)=> p.id === Number(id))
    if(!person){
        return res.status(404).json({success:false, msg:"person doesn't exit with the id"})
    }
    const newPeople =people.map((people)=>{
        if(person.id=== Number(id)){
            person.name=name
        }
        return people
    })
    person.name = name
    res.status(200).json({success:true, data:newPeople})


})

app.delete('/api/people/:id',(req,res)=>{
    const {id} =req.params
    const person = people.find((person)=>person.id ===Number (id))

    if(!person){
        
        return res.status(404).json({success:false, msg:`The person with ${id} doesn't exit`})
    }

    const newPeople = people.filter((person)=>person.id !== Number(id))
    res.status(200).json({success:true, data:newPeople})
})


app.listen(5000, ()=>{
    console.log("Server listening on port 5000")
})