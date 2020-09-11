var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const mysql = require('mysql');
var app = express()
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var Users = require('./routes/Users')
var Restaurant = require('./routes/Restaurants')
var Reservation = require('./routes/Reservation')
var Favorate = require('./routes/Favorate')


app.use('/users', Users)
app.use('/restaurants', Restaurant)
app.use('/reservation',Reservation )
app.use('/users/favorate',Favorate)

app.listen(port, function () {
  console.log('Server is running on port: ' + port)
})