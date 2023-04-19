const express = require('express')
require('./Mongoose')
const News = require('./News')

const app = express()
app.use(express.json())

const port = 8080
app.listen(port, () => console.log('Listening on port 8080'))

app.get('/news', (req, res) => {
    News.find({}).then((news) => {
        res.send(news)
    }).catch((error) => {
        res.status(500).send()
    })
})

app.get('/news/:id', (req, res) => {
    const _id = req.params.id

    News.findById(_id).then((news) => {
        if (!news) {
            return res.status(404).send()
        }
        res.send(news)
    }).catch((error) => {
        res.status(500).send()
    })
})

app.post('/news', (req, res) => {
    const news = new News(req.body)

    news.save().then(() => {
        res.send(news)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.patch('/news/:id', async (req, res) => {
    try {
        const news = await News.findByIdAndUpdate(req.params.id, req.body)

        if (!news) {
            return res.status(404).send()
        }
        res.send(news)
    } catch (error) {
        res.status(400).send(error)
    }
})

app.delete('/news/:id', async (req, res) => {
    try {
        const news = await News.findByIdAndDelete(req.params.id)

        if (!news) {
            return res.status(404).send()
        }
        res.send(news)
    } catch (error) {
        res.status(500).send()
    }
})