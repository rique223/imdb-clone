import express from 'express'
import db from '../db/conn.js'

const router = express.Router()

router.get("/", (req, res) => {
    res.send("Welcome to the organized movies route!");
});

export default router
