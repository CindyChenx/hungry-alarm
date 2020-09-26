const Sequelize = require('sequelize')
const db = {}

// const sequelize = new Sequelize('HungryAlarm', 'admin', 'cs691pr0jec+', {
//   host: 'mysql691.c0yzxuhp43yb.us-east-2.rds.amazonaws.com',
//   port: '3306',
//   dialect: 'mysql',
//   operatorsAliases: false,

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// })

const sequelize = new Sequelize('hungry-alarm-login-c', 'root', 'Workhard2019', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

