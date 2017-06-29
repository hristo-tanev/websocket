const express = require('express')
const app = new express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.use(express.static('src'))

io.on('connection', (socket) => {
  console.log('user connected.')
  socket.on('disconnect', () => {
    console.log('user disconnected.')
  })
})

http.listen(3000)
