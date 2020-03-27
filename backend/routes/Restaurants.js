const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Connection = require('../database/dbsql')

const User = require('../models/Restaurant')
users.use(cors())

process.env.SECRET_KEY = 'Workhard2019'

users.post('/register', (req, res) => {

  const userData = {
    r_name: req.body.r_name,
    r_phone: req.body.r_phone,
    r_email:req.body.r_email,
    r_password:req.body.r_password,
    r_address: req.body.r_address,
    r_zip: req.body.r_zip,
    r_desciption: req.body.r_desciption,
    r_pic: req.body.r_pic
  }

  User.findOne({
    where: {
      r_email: req.body.r_email
    }
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.r_password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: user.r_email + ' Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.post('/login', (req, res) => {
  User.findOne({
    where: {
      r_email: req.body.r_email
    }
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.r_password, user.r_password)) {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        }
      } else {
        res.status(400).json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
})

users.get('/user', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.get('/eventdispaly',(req, res) => {
    Connection.query('SELECT * From restaurants', function(err,data){
      (err)?res.send(err):res.json({users: data})
    })
})



module.exports = users