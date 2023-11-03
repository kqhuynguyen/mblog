import express from 'express'
const router = express.Router()

router.get('/blogpost/all', (req,res) => {
    res.send({
        "he": "just like me"
    })
})

router.get('/blogpost/:id/read', (req, res) => {
    res.send(req.params.id)
})

router.post('/blogpost/:id/create', (req,res) => {
    res.send(`created ${req.params.id}`)
})

export default router