const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    title: String,
    description: String,
    image: String,
    rating:{val: String, amount: Number },
    started: {
        percentage: Number,
    },
    theme: String,
});
courseSchema.index({title: "text"})
module.exports = mongoose.model('courses', courseSchema)
