const express = require('express')

const router = express.Router()
let {people} =require('../data')

router.get('/', (req,res)=>{
    res.status(200).json({success:true,data:people})
})

router.post('/',(req,res)=>{
    const {name} =req.body
    if(!name)
    {
        return  res.status(401).json({success:false,msg:'please provide name value'})
    }
    
    res.status(201).json({success:true,person:name})
})

router.post('/postman',(req,res)=>{

    const {name} = req.body
    if(!name){
        return res.status(401).json({success:false,msg:'please provide name'})
    }
    res.status(200).json({success:true,dat:[...people,name]})
})

//
router.put('/:id',(req,res)=>{

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

router.delete('/:id',(req,res)=>{
    const {id} =req.params
    const person = people.find((person)=>person.id ===Number (id))

    if(!person){
        
        return res.status(404).json({success:false, msg:`The person with ${id} doesn't exit`})
    }

    const newPeople = people.filter((person)=>person.id !== Number(id))
    res.status(200).json({success:true, data:newPeople})
})

module.exports =router;
