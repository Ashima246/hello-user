const Sequelize = require('sequelize')

const db = new Sequelize({
  dialect: 'mysql',
  database: 'sampledb1',
  username: 'ashima',
  password: 'Ashima@123'
})

const Users = db.define(
    'users',
    {
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING(8),
            allowNull: false
        },
        name: {
            type: Sequelize.STRING
        }
    })


module.exports = {
  db,
  Users
}