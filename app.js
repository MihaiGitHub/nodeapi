const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hellow")
})

const port = 8080

app.listen(port, () => {
    console.log('Server up on', port)
})