const express = require('express');
const app = express();


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}))

const adminPage = require('./routes/product');
const shoppage = require('./routes/shop');



app.use('/admin',adminPage);
app.use('/shop',shoppage);

app.get('/',(req,res,next)=>{
    res.send('<h1>Home Route!!</h1>')
    next();
}) 
app.use("*",(req,res,next)=>{
    res.send('not found')
})

app.listen(4000);
