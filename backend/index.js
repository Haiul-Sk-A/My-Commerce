const express = require('express');
const app = express();
const mysqlPool = require('./database/dataBase')

const Port = 3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello,Backend!')
});

app.get('/test',(req,res)=>{
    res.status(200).send("Node js Mysql App")
});

app.listen(Port,() =>{
    console.log(`Server Running https://localhost:${Port}`)
})