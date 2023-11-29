const express = require('express');
const app = express();
const port = 3000;
const client = require('./db');

app.use(express.json())

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

client.connect();

const apiRouter = require('./e-commerce-project/routes');
app.use('/api', apiRouter);