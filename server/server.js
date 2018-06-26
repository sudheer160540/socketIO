
const express=require('express');
const path = require('path');
const port=process.env.port||3000;
const publicpath=path.join(__dirname,'../public');
var app=express();

app.use(express.static(publicpath));
app.listen(port,()=>{
    console.log(`Node running on ${port}`)
})

