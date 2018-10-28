var express = require('express')
var bodyParser = require('body-parser')
var app = express()
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.send(req.body)
})
app.listen(8080);