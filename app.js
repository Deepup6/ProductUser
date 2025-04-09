var express = require('express');
require('./db');
var productRoutes = require('./routes/productRoutes')
var userRoutes = require('./routes/userRoutes')
var app = express();

app.use(express.json());
var port = 4000;

app.use('/api',productRoutes)
app.use('/api1',userRoutes)
app.listen(port,(req,res)=>{
    console.log(`server is up and running in ${port}`)
})
