const express = require('express')
const path = require('path')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const port = 3000

app.get('/', (req, res) => {
    res.send(path.join(__dirname, '..', 'public', 'index.html'))
})

http.listen(port, () => {
    console.log(`LIVETEXT > Server started on port ${port}`)
})

io.onconnection((socket) => {

})