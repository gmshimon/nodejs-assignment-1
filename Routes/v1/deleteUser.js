const express = require('express');
const router = express.Router();
const fs = require('fs');

router.delete('/delete/:id',async(req,res)=>{
    const id = req.params.id;
    console.log(typeof(id))
    if(isNaN(id)){
        res.send("yay")
    }
    else{
        const newID = Number(id)
        let userData = []
        fs.readFile('users.json',(err,data)=>{
            if(err){
                res.send("Error");
            }else{
                const parseData = JSON.parse(data)
                //filter out the user data of the id
                userData = parseData.filter(user=>user.ID!=newID);
                if(userData.length>0){
                    //store the new user data
                    fs.writeFile('users.json',JSON.stringify(userData),(err)=>{
                        if(err)
                            res.send('Save User failed')
                        else
                            res.send("Users added successfully");
                    })
                }else{
                    res.send("No user found with given ID")
                }
                
            }
        })
    }
})

module.exports = router;