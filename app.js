// const http = require('http');

// const routes = require('./routes')

// console.log(routes.someText);
// const server = http.createServer(routes.handler);

// server.listen(4000);

const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log('Inside the middleware');
    next();
})
app.use((req,res,next)=>{
    console.log('Inside another middleware');
    res.send('<h1> hello from express.js!')
})

app.listen(3000);