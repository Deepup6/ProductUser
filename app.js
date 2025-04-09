var express = require('express');
var dotenv=require('dotenv');

var productRoutes = require('./routes/productRoutes')
var userRoutes = require('./routes/userRoutes')
var app = express()

dotenv.config();
require('./db');
var port = process.env.port;

app.use(express.json());


//changes
app.use('/api',productRoutes)
app.use('/api1',userRoutes)
app.listen(port,(req,res)=>{
    console.log(`server is up and running in ${port}`)
})
