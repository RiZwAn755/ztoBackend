// api for student  login, not registered students

import express from "express";
import Student from "../DB/student.js";
const router = express.Router();

router.post("/", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    // Example: check if student exists (add your own logic)
    const student = await Student.findOne({ email, password });
    if (!student) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful" });
});

export default router;