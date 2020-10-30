const express = require('express')
const reserv = express.Router()
const cors = require('cors')


const Reserv = require('../models/Reservation')
reserv.use(cors())

process.env.SECRET_KEY = 'Workhard2019'

//add new reservation
reserv.post('/add',(req,res) => {

    if (!req.body.cid) {
        res.status(400)
        res.json({
          error: 'customer id needed'
        })
    }
    if(!req.body.rid){
        res.status(400)
        res.json({
            error: 'restaurant id needed'
        })
    }
    if(!req.body.date){
        res.status(400)
        res.json({
            error: 'reservation date required'
        })
    }
    if(!req.body.time){
        res.status(400)
        res.json({
            error: 'reservation time required'
        })
    }
    if(!req.body.seats){
        res.status(400)
        res.json({
            error: 'please enter how many people are joining this meal'
        })
    }
      const shiftSetup = {
        cid: req.body.cid,
        rid: req.body.rid,
        date: req.body.date,
        time: req.body.time,
        seats: req.body.seats,
        notes: req.body.notes,
        rating: req.body.rating,
        comment: req.body.comment
      }
      Reserv.create(shiftSetup)
    .then(reservation => {
      res.json({ status: reservation.time + "are reserved" })
    })
    .catch(err => {
      res.send('error: ' + err)
    })

})

// TODO: get reservation by customer id
reserv.get('/customer/:cid', function(req,res, next){
    Reserv.findAll({
      where:{
        cid:req.params.cid
      }
    }).then(reservation =>{
      if(reservation){
        res.json(reservation)
      }else{
        res.send('fell free to make any reservation if needed')
      }
    }).catch(error =>{
      res.send('error: '+ error)
    })
})

// TODO: get one reservation by reservation id
reserv.get('/:res_id', function (req, res, next) {
  Reserv.findOne({
    where: {
      reservation_id: req.params.res_id
    }
  }).then(reservation => {
    if (reservation) {
      res.json(reservation)
    } else {
      res.send('reservation dose not exist')
    }
  }).catch(err => {
    res.send('error:' + err)
  })
})

// TODO: get data by restaurant id 
reserv.get('/restaurant/:rid', function (req, res, next) {
    Reserv.findAll({
      where: {
        rid: req.params.rid
      }
    }).then(reservation => {
      if (reservation) {
        res.json(reservation)
      } else {
        res.send('reservation dose not exist')
      }
    }).catch(err => {
      res.send('error:' + err)
    })
  })

// TODO: change reservation using customer id and resturant id 
reserv.put('/update/:res_id', function (req, res, next) {
    if (!req.body.rid && !req.body.cid){
      res.status(400)
      res.json({
        error: "reservation dose not exits"
      })
    } else {
      Reserv.update({
        cid: req.body.cid,
        rid: req.body.rid,
        date: req.body.date,
        time: req.body.time,
        seats: req.body.seats,
        notes: req.body.notes,
        rating: req.body.rating,
        comment: req.body.comment
      },
        {
          where: { 
            reservation_id: req.params.res_id
          }
        }
      ).then(() => {
        res.json({ status: "reservation is updated" })
  
      }).error(err => handleError(err))
    }
  })


// TODO: cancel reservation using restaurant id and customer id 

reserv.delete('/cancel/:res_id', function (req, res, next) {
    Reserv.destroy({
      where: {
        reservation_id: req.params.res_id
      }
    })
      .then(() => {
        res.json({ status: "delect reservation will not exist anymore if needed you will have to create it again" })
      })
      .catch(err => {
        res.send('error:' + err)
      })
  })

module.exports = reserv