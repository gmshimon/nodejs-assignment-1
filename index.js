const express = require('express');
const randomUserRoute = require('./Routes/v1/getRandomUser');
const getAll = require('./Routes/v1/getAllUser');
const saveUser = require('./Routes/v1/postUser');
const deleteUser = require('./Routes/v1/deleteUser');
const updateUser = require('./Routes/v1/updateUser')
const app = express();
app.use(express.json())

const PORT = 5000;

app.use('/user',randomUserRoute); //get a random user
app.use('/user',getAll); //get all user
app.use('/user',saveUser)
app.use('/user',deleteUser)
app.use('/user',updateUser)
app.get("/",async(req,res)=>{
    res.send("Hello World!!!")
})

app.listen(PORT,()=>{
    console.log("Server is running "+PORT);
})