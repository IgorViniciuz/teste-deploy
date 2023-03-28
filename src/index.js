require('dotenv').config()
const express = require('express');

const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
    return res.json('Api funcionando')
})

const port = process.env.port || 3000

app.listen(port)