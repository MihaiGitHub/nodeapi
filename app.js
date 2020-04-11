const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()

// db
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('DB Connected')
    })

mongoose.connection.on('error', err => {
    console.log('DB connection error: ', err.message)
})

// Bring in routes
const postRoutes = require('./routes/post')

const myOwnMiddleware = (req, res, next) => {
    console.log('Middleware applied!')
    next();
}

// Middleware
app.use(morgan('dev'))
app.use(myOwnMiddleware)
app.use(bodyParser.json())
app.use("/", postRoutes);

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log('Server up on', port)
})