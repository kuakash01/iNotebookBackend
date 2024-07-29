const express = require("express");
const router = express.Router();

router.get("/",(req, res)=>{
    obj = {
        name:"Abhi Kumar",
        type:"mern stack"
    }
    res.json(obj);
})

module.exports = router;
