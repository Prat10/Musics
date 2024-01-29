const express = require('express');
const appRoute=require('./routes/Route');
// require("./db/conn");
const app=express();
const cors=require('cors');
app.use(cors());
const PORT = process.env.PORT | 5000;
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello world');
})
app.use('/api',appRoute);
app.listen(PORT,()=>{
    console.log(`server is Running ${PORT}`)
});