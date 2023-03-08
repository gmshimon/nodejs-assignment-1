const express = require('express');
const app = express();
app.use(express.json())

const PORT = 5000;

app.get("/",async(req,res)=>{
    res.send("Hello World!!!")
})

app.listen(PORT,()=>{
    console.log("Server is running "+PORT);
})