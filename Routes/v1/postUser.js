const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/save',async(req,res)=>{
    const user = req.body
    console.log(user);

    //fetch all user
    let userData;
    fs.readFile('users.json',(err,data)=>{
        if(err){
            res.send("Error");
        }else{
            const parseData = JSON.parse(data)
            userData = parseData;
            //generate unique id for every user
            const id = userData.length+1;
            user.ID = id.toString();
            userData.push(user)
        }
    })

    setTimeout(()=>{
        //check all the keys in new user object
        if(("ID" in user) && ("name" in user) && ("gender" in user)&&("contact" in user) && ("address" in user) && ("photoURL") in user){
            //save user data to json file 
            fs.writeFile('users.json',JSON.stringify(userData),(err)=>{
                if(err)
                    res.send('Save User failed')
                else
                    res.send("Users added successfully");
            })
        }else{
            res.send("Keys do not match")
        }
    },2000)
})

module.exports = router;