const express = require('express')
const router = express.Router()

const Favorate = require('../models/Favorite')

//create favorate
router.post('/add', (req, res) => {

    if (!req.body.cid) {
        res.status(400)
        res.json({
            error: 'customer id needed'
        })
    }

    if (!req.body.rid) {
        res.status(400)
        res.json({
            error: 'reastuarant id needed'
        })
    }
    const FavorateCreate = {
        cid: req.body.cid,
        rid: req.body.rid
    }

    Favorate.findOne({
        where: {
            rid: req.body.rid,
            cid: req.body.cid
        }
    })
        .then(exit => {
            if (!exit) {
                Favorate.create(FavorateCreate)
                    .then(() =>
                        res.json({ status: "favorite created" }))
                    .catch(err => {
                        res.send('error: ' + err)
                    })
            } else {
                res.json({ error: 'favorite already exit' })
            }
        })
})

//Todo: find favorate using cid
router.get('/:cid', function (req, res, next) {
    Favorate.findAll({
      where: {
        cid: req.params.cid
      }
    }).then(cid => {
      res.json(cid)
    })
  
})



//Todo: delect favorate using cid and rid
router.delete("/delete/:cid/:rid",function(req, res, next){
    Favorate.destroy({
        where:{
            cid:req.params.cid,
            rid:req.params.rid
        }
    })
    .then(()=>{
        res.json({status:"the favorite will not longer exit, but you can get it back by create in again"})
    })
    .catch((error)=>{
        res.send('error: '+ error)
    })

})

module.exports = router;
