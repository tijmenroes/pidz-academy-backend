const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

router.get("/", async (req, res) => {
  try {
    const inProgress = await Course.find({started: {$exists: true,} });
    const courses = await Course.find({theme: "Financien"});
    res.json({
        progress: inProgress,
        trending: courses, 
    });
  } catch (err) {
    res.json({ message: err });
  }
});




module.exports = router;
