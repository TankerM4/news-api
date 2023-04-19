const mongoose = require('mongoose')

const newsSchema = mongoose.Schema(
    {
        _id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true,
            trim: true
        },
        writer: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model('news', newsSchema)