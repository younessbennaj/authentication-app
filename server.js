var express = require('express')
var app = express()

//Middleware that parse request with JSON payloads
express.json();

app.get('/hello', (req, res) => {
    res.send({ message: "Hello World" })
})

const port = 3000;

app.listen(3000, 'localhost', () => {
    console.log('Server running in port 3000');
})