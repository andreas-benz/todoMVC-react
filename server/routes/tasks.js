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
    .then(idArr => {
      const newId = idArr[0]
      db.getAllTasksDB()
      .then(tasks => {
        res.json(tasks)
        return null
      })
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.patch('/', (req, res) => {
  const taskToUpdate = req.body
  db.updateTaskDB(taskToUpdate)
    .then(numberOfupdatedTasks => {
      db.getTask(taskToUpdate.t_id)
        .then(updatedTask => {
          res.json(updatedTask)
          return null
        })
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

/* INSOMNIA DATA:
{
	"title": "whatever", 
  "description": "Integer molestie, lectus sit amet pellentesque maximus, odio tortor suscipit justo, eu porttitor mi nunc scelerisque elit. Nunc et nibh erat. Aenean semper bibendum orci, quis scelerisque justo malesuada at. Vestibulum commodo ex at massa finibus semper. Phasellus metus dui, placerat in nulla ut, convallis venenatis magna. Donec finibus molestie ligula, eu porta nisi maximus a. Cras tincidunt imperdiet purus, vel lacinia augue lacinia eu.",
  "priority": "low",
  "category": "daily",
  "status": "done",
  "expiry": "2018-11-29T00:00:00.000Z",
  "created_at": "2018-11-29T00:00:00.000Z",
  "created_by": "10002"
}*/

module.exports = router