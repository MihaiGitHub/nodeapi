const express = require('express')
const app = express()
const morgan = require('morgan')

// Bring in routes
const postRoutes = require('./routes/post')

const myOwnMiddleware = (req, res, next) => {
    console.log('Middleware applied!')
    next();
}

// Middleware
app.use(morgan('dev'))
app.use(myOwnMiddleware)

app.use("/", postRoutes);

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log('Server up on', port)
})