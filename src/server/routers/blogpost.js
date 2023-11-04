import express from 'express'
import BlogPostModel from '../models/blogpost'
import asyncHandler  from 'express-async-handler'
import db from '../adapters/orm'

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

router.post('/blogpost/create', asyncHandler(async (req,res) => {
    const doc = BlogPostModel(
        req.body
    )
    const saved_doc = await doc.save()
    res.send({_id: saved_doc._id})
}))

router.patch('/blogpost/:id/update', asyncHandler(async (req,res) => {
    if( !db.isValidObjectId(req.params.id) ) {
        return res.status(404).json({message: 'Not found'})
    }
    const doc = await BlogPostModel.findOneAndUpdate(
        {_id: req.params.id},
        req.body
    )
    if (doc === null) {
        return res.status(404).json({message: 'Not found'})
    }
    res.send({_id: doc._id})
}))
export default router