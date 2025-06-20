
import express from "express";
import "../DB/examForm";
import examForm from "../DB/examForm";
const router = express.Router();

router.get("/" , (req , resp) =>{

     const regitered_students = examForm.find();

     if(!regitered_students)
     {
        resp.send("unable to fetch");
     }
     else 
     {
        resp.send(regitered_students);
     }

});

export default router;