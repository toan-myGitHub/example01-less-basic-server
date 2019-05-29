const { NODE_ENV='development', PORT=5000 } = process.env
const express = require('express')
const app = express()

if (NODE_ENV === 'development') app.use(require('morgan')('dev'))

app.use((req, res, next) => {
  console.log('You are inside the server!')
  next()
})

app.use((req, res) => {
  res.status(200).json({
    message: `You made it!`
  })
})

const listener = () => console.log(`Application listening on port ${PORT}!`)
app.listen(PORT, listener)
