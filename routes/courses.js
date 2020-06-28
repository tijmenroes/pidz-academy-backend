const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

router.get("/", async (req, res) => {
  try {
    //return all posts
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.json({ message: err });
  }
});

//Add new course
router.post("/", async (req, res) => {
  const post = new Course({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    rating: req.body.rating,
    started: req.body.started
  })
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//view specific course
router.get("/:id", async (req, res) => {
    try {
      const post = await Course.findById( req.params.id);
      res.json(post);
    } catch (err) {}
  });

module.exports = router;
