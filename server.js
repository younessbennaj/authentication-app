var express = require('express')
const mongoose = require('mongoose');
var app = express()

//Get environment-specific variables
require('dotenv').config()

//import route module
var userRouter = require('./routes/Users');

//Set the PORT to listen
const PORT = process.env.PORT || 4000;
console.log(process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_NAME);
const DB_URL = `mongodb+srv://dbUser:<password>@todolist.vdvcs.mongodb.net/<dbname>?retryWrites=true&w=majority`

//Middleware that parse request with JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Routes HTTP GET request with '/hello' path
app.get('/hello', (req, res) => {
    res.send({ message: "Hello World" })
})

app.use('/api/users', userRouter);

app.listen(3000, 'localhost', () => {
    console.log('Server running in port 3000');
})