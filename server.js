var express = require('express')
var app = express()

//import route module
var userRouter = require('./routes/Users');

//Middleware that parse request with JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Routes HTTP GET request with '/hello' path
app.get('/hello', (req, res) => {
    res.send({ message: "Hello World" })
})

app.use('/api/users', userRouter);

const port = 3000;

app.listen(3000, 'localhost', () => {
    console.log('Server running in port 3000');
})