const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'Event',
  {
    event_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    rid: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    event_title: {
        type: Sequelize.STRING
    },
    event_date: {
      type: Sequelize.DATE
    },
    start_time: {
        type: Sequelize.STRING
    },
    end_time: {
      type: Sequelize.STRING
    },
    description:{
        type:Sequelize.STRING
    },
    event_picture:{
        type:Sequelize.STRING
    }
    
  },
  {
    timestamps: false
  }
)
