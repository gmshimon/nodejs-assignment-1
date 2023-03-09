const express = require("express");
const router = express.Router();
const fs = require("fs");

router.patch("/bulk-update", async (req, res) => {
  const ids = req.body;
  console.log(ids);

  fs.readFile("users.json", (err, data) => {
    if (err) {
      res.send("Error");
    } else {
      const parseData = JSON.parse(data);
      parseData.map((user) => {
        ids.map((id) => {
          if (user.ID == id) {
            //we will change the name and address
            user.name = "user-" + id;
            user.address = "Address- " + id;
          }
        });
      });
      //store the new user data
      fs.writeFile("users.json", JSON.stringify(parseData), (err) => {
        if (err) res.send("Save User failed");
        else res.send("Users added successfully");
      });
    }
  });
});

module.exports = router;
