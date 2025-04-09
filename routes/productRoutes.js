var express = require('express');
var router = express.Router();
var productmodel = require('../model/product');

router.post('/post',(req,res)=>{
    try {
        productmodel(req.body).save();
        res.send("product added")
    } catch (error) {
        res.send(error)
    }
})
router.get('/get',async(req,res)=>{
    try {
        var data = await productmodel.find();
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})
router.delete('/delete/:id',async(req,res)=>{
    try {
        await productmodel.findByIdAndDelete(req.params.is,req.body);
        res.send("Data Deleted");
    } catch (error) {
        console.log(error)
    }
})
router.put('/put/:id',async(req,res)=>{
    try {
        await productmodel.findByIdAndUpdate(req.params.id,req.body);
        res.send("edited")
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;