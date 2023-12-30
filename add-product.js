const express = require('express');
const app = express();


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res,next)=>{
    res.send('<h1>Home Route</h1>')
    
})

app.get('/add-product',(req,res,next)=>{
    res.send(
        '<form method="post" action ="/product"><input type="text" name="title"><input type="text" name="desc"><button type="submit" >Add </button></form>'
    )
})

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.listen(4000);
