const { Sequelize } = require('sequelize');

const DB_NAME = 'node-todo'
const USER_NAME = 'root'
const PASSWORD = '#MLvhara5g7yb'

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
})

module.exports = sequelize