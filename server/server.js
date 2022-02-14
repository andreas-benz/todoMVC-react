const express = require('express')
const path = require('path')

const server = express()
const taskRoutes = require('./routes/tasks')

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())

server.use('/api/v1/tasks', taskRoutes)

// for browser router (react-router-dom)
server.get('*', (req, res) => {
 res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = server