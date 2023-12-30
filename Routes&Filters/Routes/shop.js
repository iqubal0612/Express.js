const express = require('express');

const router = express.Router();



router.get('/product',(req,res,next)=>{
    res.send('<p>All Products</p>')
})

module.exports = router;
