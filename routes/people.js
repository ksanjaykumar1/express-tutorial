const express = require('express')

const router = express.Router()

const {getPeople,createPerson,createPersonPostman,changeNameById,deletePersonById} = require('../controller/people')

// to send all the people object
router.get('/', getPeople)

// to send back person's name
router.post('/',createPerson)

// to send back people's object along with the name in the body

router.post('/postman',createPersonPostman)

// to change the name of the person by id
router.put('/:id',changeNameById)

// to delete the person by the id
router.delete('/:id',deletePersonById)


module.exports =router;
