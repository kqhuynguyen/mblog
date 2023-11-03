import express from 'express'
import BlogPostModel from '../models/blogpost'

const router = express.Router()

router.get('/blogpost/all', (req,res) => {
    BlogPostModel
    .find({})
    .then((docs) => {
        res.send({
            "blogpost_ids": docs.map(a=>a._id)
        })
    })
})

router.get('/blogpost/:id/read', (req, res) => {
    res.send(req.params.id)
})

router.post('/blogpost/:id/create', (req,res) => {
    res.send(`created ${req.params.id}`)
})

export default router