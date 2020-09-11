const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'paymentInfo',
  {
    phid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    rid: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    date_time:{
        type:Sequelize.DATE
    },
    amount:{
        type:Sequelize.FLOAT
    }
    
  },
  {
    timestamps: false
  }
)
