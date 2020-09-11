const express = require('express')
const router = express.Router()
const Ava = require('../models/Availability')

//Todo : crate avaliable time

router.post('/create',(req, res) =>{
    if (!req.body.rid) {
        res.status(400)
        res.json({
          error: 'rid is required'
        })
    }

    if (!req.body.day) {
        res.status(400)
        res.json({
          error: 'day of the week is required'
        })
    }

    if (!req.body.start_time) {
        res.status(400)
        res.json({
          error: 'start time and end time is required'
        })
    }

    if (!req.body.end_time) {
        res.status(400)
        res.json({
          error: 'start time and end time is required'
        })
    }

    const avaliableTime = {
        rid: req.body.rid,
        day: req.body.day,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        limits: req.body.limits
    }

    // Todo : if rid and day already exit then can not create it again 
    Ava.create(avaliableTime)
    .then(avaliable =>{
        res.json({status: avaliable.start_time +" is avaliable"})
    })
    .catch(error =>{
        res.send('error: '+ error)
    }
    )
})

//Todo : got avaliable time by rid
router.get('/:rid',(req, res) =>{
    Ava.findAll({
        where:{
          rid:req.params.rid
        }
      }).then(ava =>{
        if(ava){
          res.json(ava)
        }else{
          res.send('the restaurant dose not upload their avaliable time')
        }
      }).catch(error =>{
        res.send('error: '+ error)
      })
})

//Todo: get avaliable by rid and date
router.get('/day/:rid/:day',(req, res) =>{
    Ava.findOne({
        where:{
          rid:req.params.rid,
          day: req.params.day
        }
      }).then(ava =>{
        if(ava){
          res.json(ava)
        }else{
          res.send('the restaurant dose not upload their avaliable time on this day of week')
        }
      }).catch(error =>{
        res.send('error: '+ error)
      })
})


//Todo : update payment infomation

router.put('/update/:rid/:day', function (req, res, next) {
    if (!req.body.rid && !req.body.day){
      res.status(400)
      res.json({
        error: "require restaurant id and date to update the availability"
      })
    } else {
      Ava.update({
        rid: req.body.rid,
        day: req.body.day,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        limits: req.body.limits
      },
        {
          where: { 
            rid: req.body.rid,
            day: req.body.day
          }
        }
      ).then(() => {
        res.json({ status: "available time is updated" })
  
      }).error(err => handleError(err))
    }
  })


module.exports = router