const Sequelize = require('sequelize')
const db = require('../database/dbr.js')

module.exports = db.sequelize.define(
    'user',
    {
        rid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        r_name: {
            type: Sequelize.STRING
        },
        r_phone: {
            type: Sequelize.STRING
        },
        r_email: {
            type: Sequelize.STRING
        },
        r_password: {
            type: Sequelize.STRING
        },
        r_address: {
            type: Sequelize.STRING
        },
        r_zip: {
            type: Sequelize.STRING
        },
        r_desciption: {
            type: Sequelize.STRING
        },
        r_pic: {
            type: Sequelize.STRING
        },
    },
    {
        timestamps: false
    }
)