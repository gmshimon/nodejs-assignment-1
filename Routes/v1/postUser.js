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

    //fetch all user
    let userData;
    fs.readFile('users.json',(err,data)=>{
        if(err){
            res.send("Error");
        }else{
            const parseData = JSON.parse(data)
            userData = parseData;
            userData.push(user)
        }
    })

    setTimeout(()=>{
        fs.writeFile('users.json',JSON.stringify(userData),(err)=>{
            if(err)
                res.send('Save User failed')
            else
                res.send("Users added successfully");
        })
    },2000)
})

module.exports = router;