const express = require("express");
const router = express.Router();
const Article = require("../models/Article");

router.get("/", async (req, res) => {
  try {
    //return all articles
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.json({ message: err });
  }
});

//Add new course
router.post("/", async (req, res) => {
  const post = new Article({
    title: req.body.title,
    body: req.body.body,
    image: req.body.image,
    date:req.body.date,
    theme:req.body.theme,
  })
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//view specific article
router.get("/:id", async (req, res) => {
    try {
      const article = await Article.findById( req.params.id);
      const related =  await Article.find({theme: article.theme}).limit(3)
      console.log(related)
      const justIn = await Article.find().sort({date: 1}).limit(3)
      
      const response = {article : article, related: related, justIn: justIn}
      res.json(response);
    } catch (err) {}
  });

module.exports = router;
