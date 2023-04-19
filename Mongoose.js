const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/news-api',
    {
        useNewUrlParser: true,
    }
)