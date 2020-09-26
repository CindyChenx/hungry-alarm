const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'favorite',
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
