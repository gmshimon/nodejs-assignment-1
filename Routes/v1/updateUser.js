const express = require("express");
const router = express.Router();
const fs = require("fs");
const { exit } = require("process");

router.patch("/update/:id", (req, res) => {
  const id = req.params.id;
  console.log(typeof id);
  if (isNaN(id)) {
    res.send("ID is not an number");
  } else {
    const newID = Number(id);
    let userData = [];
    fs.readFile("users.json", (err, data) => {
      if (err) {
        res.send("Error");
      } else {
        const parseData = JSON.parse(data);
        //loop through the user data array to get the specific user and update that user
        parseData.map(user=>{
            if(user.ID==newID){
                //here we will change only the name and address
                user.name = "More ja";
                user.address = "Bahtu Pahat"
                // res.send(user)
                
            }
        })
        res.send(parseData)
        //store the new user data
        fs.writeFile('users.json',JSON.stringify(parseData),(err)=>{
            if(err)
                res.send('Save User failed')
            else
                res.send("Users added successfully");
        })
      }
    });
  }
});

module.exports = router;
