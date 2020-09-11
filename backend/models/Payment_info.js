const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'paymentInfo',
  {
    payment_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    rid: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    payment_method: {
        type: Sequelize.STRING
    },
    account_number: {
        type: Sequelize.INTEGER
    },
    rounting_number: {
      type: Sequelize.INTEGER
    }
    
  },
  {
    timestamps: false
  }
)
