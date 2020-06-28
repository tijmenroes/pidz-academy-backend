const express = require("express");
const router = express.Router();
const Course = require("../models/Course");
const Article = require("../models/Article");


//Search func
router.get("/:searchterm", async  (req, res) => {
    try {
      const result = await Course.find( { $text: {$search: req.params.searchterm} } );
      const result2 = await Article.find( { $text: {$search: req.params.searchterm} } );
      
      if(result.length < 1 && result2.length < 1) {
         res.json({found: false}) 
      } else {
      
      var array = [...result, ...result2]
      res.json(array)
    }
    } catch (err) {}
  });

module.exports = router;
