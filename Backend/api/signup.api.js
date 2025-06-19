const express = require("express");
const router = express.Router();
require("../DB/student");
require("../DB/config");

router.post("/", (req, res) => {

    console.log(req.body);

    const { name, lastName, phone, email, password } = req.body;
    const student = new studentModel({ name, lastName, phone, email, password });
    student.save();
    res.status(201).json({ message: "Student created successfully" });
});

module.exports = router;