const Post = require('../models/post')

exports.getPosts = (req, res) => {
    console.log('get posts')
    res.json({
        posts: [
            { title: 'First post' },
            { title: 'Second post' }
        ]
    })
}

exports.createPost = (req, res) => {
    console.log('create post')
    const post = new Post(req.body)

    post.save()
        .then(result => {
            res.status(200).json({
                post: result
            })
        })
}