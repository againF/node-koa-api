const Sequelize = require('sequelize')
const { dbName, host, port, user, password } = require('../config/config').database
const sequelize = new Sequelize(dbName, user, password, {
    dialect: 'mysql', // 数据库类型
    host,
    port,
    logging: true, // 是否显示sql语句
    timezone: '+08:00', // 时区
})
module.exports = {
    sequelize
}