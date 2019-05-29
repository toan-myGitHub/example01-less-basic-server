const express = require('express')
const app = express()
const port = 5000

const listener = () => console.log(`Application listening on port ${port}!`)
app.listen(port, listener)
