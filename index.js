const express = require('express')
const app = express()
const port = 3000
const client = require('./queries');

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

client.connect();