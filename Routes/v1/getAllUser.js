const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get("/all",async(req,res)=>{
    const {limit} = req.query
    console.log(limit)
    fs.readFile('users.json',(err,data)=>{
        if(err){
            res.send("Error");
        }else{
            res.send(JSON.parse(data).slice(0,limit));
        }
    })
})

module.exports = router;