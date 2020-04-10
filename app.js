const express = require('express')
const app = express()
const morgan = require('morgan')

// Bring in routes
const { getPosts } = require('./routes/post')

const myOwnMiddleware = (req, res, next) => {
    console.log('Middleware applied!')
    next();
}

// Middleware
app.use(morgan('dev'))
app.use(myOwnMiddleware)

app.get("/", getPosts);

const port = 8080

app.listen(port, () => {
    console.log('Server up on', port)
})