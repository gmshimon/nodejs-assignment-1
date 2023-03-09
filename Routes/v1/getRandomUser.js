const express = require('express');
const router = express.Router();

router.get('/random',async (req,res)=>{
    res.send("Dibo na user der");
})

module.exports = router;