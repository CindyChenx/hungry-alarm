const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'favorate',
  {
    rid: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    cid: {
      type: Sequelize.INTEGER,
      allowNull: false
    },  
  },
  {
    timestamps: false
  }
)
