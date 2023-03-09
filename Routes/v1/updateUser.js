const express = require('express');
const router = express.Router();
const fs = require('fs');

router.patch('/update',(req,res)=>{
    res.send("Patch api")
})

module.exports = router;