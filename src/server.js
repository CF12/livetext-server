const path = require('path')
const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const fs = require('fs')

const port = 3000

let appHtml = fs.readFileSync(path.join(__dirname, '..', 'public', 'index.html'))
const window = new JSDOM(appHtml).window

app.get('/', (req, res) => {
    res.send(appHtml)
})

http.listen(port, () => {
    console.log(`LIVETEXT > Server started on port ${port}`)
})

io.onconnection((socket) => {
    
})