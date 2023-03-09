const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/random',async (req,res)=>{
    fs.readFile('users.json',(err,data)=>{
        if(err){
            res.send("Error");
        }else{
            //get the length of data array
            const dataLength = JSON.parse(data).length
            //generate a random number
            let x = Math.floor((Math.random() * dataLength));
            res.send(JSON.parse(data)[x]);
        }
    })
})

module.exports = router;