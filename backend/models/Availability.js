const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'availablility',
  {
    rid: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    day: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    start_time:{
        type:Sequelize.DATE
    },
    end_time:{
        type:Sequelize.DATE
    },
    limit:{
        type:Sequelize.INTEGER
    }  
  },
  {
    timestamps: false
  }
)
