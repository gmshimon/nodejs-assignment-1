const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/save',async(req,res)=>{
    const user = req.body
    console.log(user);
    const newUser = {
        name: 'hehe',
        address: 'Mia para',
        gender: 'female',
        contact: '0899999',
        photoURL: 'asdasdasdasd'
    }
    fs.writeFile('users.json',JSON.stringify(newUser),err=>{
        if(err){
            res.send("Save user failed")
        }else{
            res.send("User added successfully");
        }
    })
})

module.exports = router;