const {Router} = require('express')
const ToDo = require('../models/todo')
const router = Router()
//get tasks list
router.get('/', async (req, res) => {
    try {
        const todos = await ToDo.findAll()
        res.status(200).json(todos)
    }
    catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }
})
//add single task to list
router.post('/', async (req, res) => {
    try {
        const todo = await ToDo.create({
            title: req.body.title,
            done: false
        })
        res.status(201).json({todo})
    }
    catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }
})
//change task status
router.put('/:id', async (req, res) => {
    try {
        const todo = await ToDo.findByPk(+req.params.id)
        todo.done = req.body.done
        await todo.save()
        res.status(200).json({todo})
    }
    catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }
})
//delete task
router.delete('/:id', async (req,res) => {
    try {
        const todos = await ToDo.findAll({
            where: {
                id: +req.params.id
            }
        })
        const todo = todos[0]
        await todo.destroy()
        res.status(204).json({})
    }
    catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }
})
module.exports = router
