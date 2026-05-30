const http = require('http');
require('dotenv').config();
const addController = require('./controllers/addController');
const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('./db');
const User = require('./models/User');

// const server = http.createServer((req,res)=>{

//     res.writeHead(200,{'Content-Type':'json'});
//     res.write(JSON.stringify({message: "Hello World"}));
// })

app.get('/hello',(req,res)=>{
    res.send('Hello');
});

app.use('/addop/',require('./routes/addRoute'));

app.use('/calcop/',require('./routes/calcRoute'));


app.get('/add',(req,res)=>{
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    let sum = add(a,b);
    res.send(`The sum of ${a} and ${b} is ${sum}`);
})


app.use('/user',require('./routes/userRoutes'));

app.listen('3000', () => {
  console.log(`Example app listening on port 3000`);
});

// server.on('error',(err)=>{
//     console.log(err);
// })
// server.listen("3000",()=>{
//     console.log("Server is running on port 3000");
// })



// function add(a,b){
//     return a+b;
// }

// const http = require('http');
// const greet = require('./greet');



// console.log(greet('Paavan'));

// const {add, sub}= require('./calc')
 
// console.log(add(1, 2));
// console.log(sub(1, 2));



// const server = http.createServer((req, res) => {
//   if (req.method == 'GET' && req.url == '/hello') {
//     res.writeHead(200, { 'Content-Type': 'json' });
//     res.write(JSON.stringify({ message: "Hello World" }));
//   }
  
// })

// server.listen('3000', () => {
//   console.log(`Example app listening on port 3000`);
// })


// server.on('error', (error) => {
//   console.log(error);
// })
