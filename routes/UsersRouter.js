const express = require('express')
const {User} = require('../db/models');

const UsersRouter = express.Router()

UsersRouter.get('/', async (req, res) => { 
    try{
        const users = await User.findAll()
        res.json({users})
    }catch(error){
        throw error
    }
})

UsersRouter.get('/:id' , async(req, res) => {
    try{
        const users = await User.findByPk(req.params.id)
        res.json({users})
    }catch(error){
        throw error
    }
})

module.exports = UsersRouter