const express = require('express');

const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors())
require('dotenv/config');

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Import routes
const postsRoute = require('./routes/posts')
app.use('/posts', postsRoute)

const courseRoute = require('./routes/courses')
app.use('/courses', courseRoute)

const articleRoute = require('./routes/articles')
app.use('/articles', articleRoute)

const overviewRoute = require('./routes/overview')
app.use('/overview', overviewRoute)

const searchRoute = require('./routes/search')
app.use('/search', searchRoute)


//Connect to db
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true} ,    () => {
    console.log('connected to DB')
})

//Listen to server
app.listen(process.env.PORT || 3000)