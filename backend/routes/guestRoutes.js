import express from "express";
import  db from "../db/connection.js";


const router = express.Router();

// Get all guests
router.get("/",async (req,res)=>{
    try {
        const guests = await db("guests").select("*");  
        res.json(guests);
    } catch (error) {
        res.status(500).json({message:"Error fetching guests",error});
    }   
});

// Add a new guest
router.post("/",async (req,res)=>{
    const {name,attending,side} = req.body; 
    try {
        const [id] = await db("guests").insert({name,attending,side});
        const newGuest = await db("guests").where({id}).first();
        res.status(201).json(newGuest);
    } catch (error) {
         console.error("❌ Error adding guest:", error);
        res.status(500).json({message:"Error adding guest",error});
    }   
});

export default router;  