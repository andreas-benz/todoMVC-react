const express = require('express')
const res = require('express/lib/response')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getAllTasksDB()
    .then(tasks => {
      res.json(tasks)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const taskToAdd = req.body
  db.addTaskDB(taskToAdd)
    .then(idOfaddedTask => {
      res.json(idOfaddedTask)
        return null
      })
    
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.patch('/', (req, res) => {
  const taskToUpdate = req.body
  console.log("from router", taskToUpdate)
  db.updateTaskDB(taskToUpdate)
    .then(numberOfupdatedTasks => {
      res.json(numberOfupdatedTasks)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
  })

router.delete('/', (req, res) => {
  const t_id = (req.body.t_id)
  db.deleteTaskDB(t_id)
    .then (numberOfDeletedItem => {
      res.json("task deleted")
    })
     .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router