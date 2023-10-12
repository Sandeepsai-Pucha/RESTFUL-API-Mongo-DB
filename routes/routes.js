const express = require('express')
const Model = require('../models/models')
const router = express.Router()

// GET ALL API
router.get('/getAll', async (request, response) => {
    try {
        const data = await Model.find();
        response.send(data)
    } catch(error) {
        response.status(500).json({message: error.message})
    }
})

// GET By ID API
router.get('/getOne/:id', async (request, response) => {
    try {
        const data = await Model.findById(request.params.id);
        response.send(data)
    } catch(error) {
        response.status(500).json({message: error.message})
    }
})

// POST API
router.post('/post', async (request, response) => {
    const data = new Model({
        name: request.body.name,
        age: request.body.age
    })

    try {
        const dataToSave = await data.save()
        response.status(200).json(dataToSave)
    } catch(error) {
        response.status(400).json({message: error.message})
    }
})

// Update By ID

router.patch('/update/:id', async (request, response) => {
    try {
        const id = request.params.id;
        const updatedData = request.body;
        const options = {new : true}

        const updatedResult = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        response.send(updatedResult)
    } catch(error) {
        response.status(400).json({message: error.message})
    }
})

// DELETE by ID API

router.delete('/delete/:id', async (request, response) => {
    try {
        const id = request.params.id;
        const data = await Model.findByIdAndDelete(id);
        response.send(`Document with ${data.name} has been deleted...`)
    } catch(error) {
        response.status(400).json({message: error.message})
    }
})

module.exports = router;