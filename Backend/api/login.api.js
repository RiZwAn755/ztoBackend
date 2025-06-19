const express = require("express");
require("../DB/student");
const router = express.Router();

router.post("/", (req, res) => {
    console.log(req.body);

    if(!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    
    res.status(200).json({ message: "Login successful" });
});

module.exports = router;