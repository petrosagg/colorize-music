const express = require('express')
const bodyParser = require('body-parser')
const setColor = require('./rpi-ws291x.js')

const app = express()

app.post(
  '/color',
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json(),
	(req, res, next) => {
    setColor(req.body.color)
  },
  function(req, res) {
    res.json({})
  }
)

const PORT = process.env.PORT || 80
app.listen(PORT, () => {
  console.log(`App is now running on http://localhost:${PORT}`)
})
