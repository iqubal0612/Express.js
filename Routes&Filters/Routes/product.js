
const express = require('express');

const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    res.send(
        '<form method="post" action ="/admin/add-product"><input type="text" name="title"><input type="text" name="desc"><button type="submit" >Add </button></form>'
    )
})

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports=router;
