const express = require('express');
const randomUserRoute = require('./Routes/v1/getRandomUser');
const app = express();
app.use(express.json())

const PORT = 5000;

app.use('/user',randomUserRoute);

app.get("/",async(req,res)=>{
    res.send("Hello World!!!")
})

app.listen(PORT,()=>{
    console.log("Server is running "+PORT);
})