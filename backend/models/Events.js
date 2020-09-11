const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'events',
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
    start_time: {
        type: Sequelize.DATE
    },
    end_time: {
      type: Sequelize.DATE
    },
    description:{
        type:Sequelize.STRING
    },
    event_pic:{
        type:Sequelize.STRING
    }
    
  },
  {
    timestamps: false
  }
)
