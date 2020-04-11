const express = require('express')
const { getPosts, createPost } = require('../controllers/post')
const validator = require('../validator')
const router = express.Router()

router.get('/', getPosts)

// Only if it passes the middleware (validator) - it will create the post
router.post('/post', validator.createPostValidator, createPost)


module.exports = router