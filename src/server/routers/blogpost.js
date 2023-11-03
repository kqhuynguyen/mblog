import express from 'express'
import BlogPostModel from '../models/blogpost'
import asyncHandler  from 'express-async-handler'
const router = express.Router()

router.get('/blogpost/all', asyncHandler(async (req,res) => {
    const docs = await BlogPostModel.find({})
    res.send({
        "blogpost_ids": docs.map(a=>a._id)
    })
}))

router.get('/blogpost/:id/read', asyncHandler(async (req, res) => {
    const doc = await BlogPostModel.findById(req.params.id)
    if (doc === null) {
        return res.status(404).send()
    }
    res.send(doc)
}))

router.post('/blogpost/:id/create', asyncHandler(async (req,res) => {
    res.send(`created ${req.params.id}`)
}))

export default router