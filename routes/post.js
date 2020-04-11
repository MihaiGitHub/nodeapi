const express = require('express')
const postController = require('../controllers/post')
const validator = require('../validator')
const router = express.Router()

router.get('/', postController.getPosts)

//console.log(process)
// Only if it passes the middleware (validator) - it will create the post
router.post('/post', validator.createPostValidator, postController.createPost)
//router.post('/post', postController.createPost)


module.exports = router