const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'available',
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
    limits:{
        type:Sequelize.INTEGER
    }  
  },
  {
    timestamps: false
  }
)
