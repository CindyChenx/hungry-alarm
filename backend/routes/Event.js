const express = require('express')
const { Route } = require('react-router-dom')
const router = express.Router()

const Events = require('../models/Events')


//create event
router.post('/create', (req, res) => {
  if (!req.body.event_title) {
    res.status(400)
    res.json({
      error: 'please give the event a name'
    })
  }
  if (!req.body.event_date) {
    res.status(400)
    res.json({
      error: 'please set up the event date'
    })
  }
  if (!req.body.rid) {
    res.status(400)
    res.json({
      error: 'please login to get reastuarant id'
    })
  }
  const EventCreate = {
    rid: req.body.rid,
    event_title: req.body.event_title,
    event_date: req.body.event_date,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
    description: req.body.description,
    event_picture: req.body.event_picture
  }

  Events.create(EventCreate)
    .then(event => {
      res.json({ status: event.event_title + " are create" })
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

//Todo: display event by rid
router.get('/:rid', function (req, res, next) {
  Events.findAll({
    where: {
      rid: req.params.rid
    }
  }).then(event => {
    res.json(event)
  })
})

//Todo: display event by event Id
router.get('/event/:event_id', function (req, res, next) {
  Events.findOne({
    where: {
      event_id: req.params.event_id
    }
  }).then(event => {
    res.json(event)
  })
})

//Todo: find event by event title
router.get('/title/:title', function (req, res, next) {
  Events.findOne({
    where: {
      event_title: req.params.title
    }
  }).then(event => {
    res.json(event)
  })
})

//Todo: delect favorate using cid and rid
router.delete("/delete/:event_id", function (req, res, next) {
  Events.destroy({
    where: {
      event_id: req.params.event_id
    }
  })
    .then(() => {
      res.json({ status: "Event will not exist anymore if needed you will have to create it again" })
    })
    .catch(err => {
      res.send('error:' + err)
    })

})

router.put('/update/:event_id', function (req, res, next) {
  if (!req.body.rid) {
    res.status(400)
    res.json({
      error: "event dose not exits"
    })
  } else {
    Events.update({
      rid: req.body.rid,
      event_title: req.body.event_title,
      event_date: req.body.event_date,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      description: req.body.description,
      event_picture: req.body.event_picture
    },
      {
        where: {
          event_id: req.params.event_id
        }
      }
    ).then(() => {
      res.json({ status: "Event is updated" })

    }).error(err => handleError(err))
  }
})


module.exports = router;