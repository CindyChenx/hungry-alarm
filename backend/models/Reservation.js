const Sequelize = require('sequelize')
const db = require('../database/db.js')


module.exports = db.sequelize.define(
    'reservation',
    {
      reservation_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      cid:{
        type:Sequelize.INTEGER,
        allowNull: false
      },
      rid:{
        type:Sequelize.INTEGER,
        allowNull: false
      },
      date:{
        type:Sequelize.DATEONLY,
        allowNull: false
      },
      time:{
        type:Sequelize.DATE,
        allowNull: false
      },
      seats:{
        type:Sequelize.INTEGER,
        allowNull: false
      },
      notes:{
        type:Sequelize.STRING
      },
      rating:{
        type:Sequelize.INTEGER
      },
      comment:{
        type:Sequelize.STRING
      }

    },
    {
      timestamps: false
    }
  )