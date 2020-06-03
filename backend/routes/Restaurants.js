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
          userData.r_password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: user.r_email + ' Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'Resturant already exists' })
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
      } else if(!user.r_password||!user.r_email){
        res.status(400).json({ error: 'email or password can not be empty' })
      } 
      else {
        res.status(400).json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
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
        res.status(400).json({ error: 'Restaurant does not exist' })
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
    
})
//display all restaurant data using mysql
users.get('/eventdispaly',(req, res) => {
  Connection.query('SELECT * From restaurants', function(err,data){
    (err)?res.send(err):res.json({users: data})
  })
})

users.get('/:rid', function(req,res,next){
  User.findOne({
    where: {
      rid: req.params.rid
    }
  })
  .then(user =>{
    
    if(user){
      
      res.json(user)
    }else{
      res.send('task dose not exist')
    }
  }).catch(err =>{
    res.send('error:'+err)
  })
})

//get the data using mysql but can not change the hash password
// users.get('/:rid', function (req, res) {
//   Connection.query('SELECT * From restaurants where rid=?', [req.params.rid], function (error, results, fields) {
//    if (error) throw error;
//    res.end(JSON.stringify(results));
//  });
// });


//for reseting the password
users.put('/edit/passwordsetting/:rid',function(req,res,next){
  
  User.findOne({
    where: {
      r_email: req.body.r_email
    }
  })
    //TODO bcrypt
    .then(  
        bcrypt.hash(req.body.r_password, 10, (err, hash) => {
          req.body.r_password = hash
          User.update(
            {r_name: req.body.r_name,
              r_phone: req.body.r_phone,
              r_email:req.body.r_email,
              r_password:req.body.r_password,
              r_address: req.body.r_address,
              r_zip: req.body.r_zip,
              r_desciption: req.body.r_desciption,
              r_pic: req.body.r_pic},
              {where:{rid:req.params.rid}}
          )
          .then(()=>{
            res.json({status:'Restaurant successful updated'})
          })
          .error(err => handleError(err))
        })
      
    )
    .catch(err => {
      res.send('error: ' + err)
    })
})


 
//update without seting the password
users.put('/edit/:rid',function(req,res,next){
  
  if(!req.body.r_email){
    res.status(400)
    res.json({
      error:'error data without email'
    })
  }else{
    User.update(
      {r_name: req.body.r_name,
        r_phone: req.body.r_phone,
        r_email:req.body.r_email,
        r_password:req.body.r_password,
        r_address: req.body.r_address,
        r_zip: req.body.r_zip,
        r_desciption: req.body.r_desciption,
        r_pic: req.body.r_pic},
        {where:{rid:req.params.rid}}
    )
    .then(()=>{
      res.json({status:'Restaurant successful updated'})
    })
    .error(err => handleError(err))
  }
  
})


// https://www.youtube.com/watch?v=HrTVWTv0sLQ
//https://medium.com/@sarahdherr/sequelizes-update-method-example-included-39dfed6821d
// //using mysql for update but dose not work with updating hash password
// users.put('/edit/:rid', function (req, res) {
//   const updatesql = 'UPDATE `restaurants` SET `r_name`= ? ,`r_phone`= ?,`r_email`= ?,`r_password`=?,`r_address`= ?,`r_zip`=?,`r_desciption`=?,`r_pic`=? WHERE rid = ?'
//   const updateparam = [req.body.r_name,req.body.r_phone, req.body.r_email, req.body.r_password,req.body.r_address,req.body.r_zip,req.body.r_desciption,req.body.r_pic,req.body.rid]
//   bcrypt.hash(req.body.r_password,10,(err,hash) => {
//     updateparam.r_password = hash;
//   })
//   Connection.query(updatesql,updateparam , function (error, results, fields) {
//    if (error) throw error;
//    //still can not hash the password 
//    // might need to try this https://sequelize.org/v5/manual/getting-started
//     bcrypt.hash(req.body.r_password,10,(err,hash) => {
//       updateparam.r_password = hash;
//     })
   
   
//    res.send(JSON.stringify(results));
//  });
// });
// // https://www.js-tutorials.com/nodejs-tutorial/node-js-rest-api-add-edit-delete-record-mysql-using-express/
// // https://code.tutsplus.com/tutorials/code-your-first-api-with-nodejs-and-express-connect-a-database--cms-31699
// // https://www.youtube.com/watch?v=4fWWn2Pe2Mk

users.get('/events/:rid', function (req, res) {
  Connection.query('select * from Events where rid=?', [req.params.rid], function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});

users.post('/events/create', function (req, res) {
   Connection.query('INSERT INTO Events SET ?', req.body, function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});




module.exports = users