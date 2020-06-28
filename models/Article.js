const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    title: String,
    body: Array,
    image: String,
    date: Date,
    theme: String,
});
articleSchema.index({title: "text"})
module.exports = mongoose.model('articles', articleSchema)
