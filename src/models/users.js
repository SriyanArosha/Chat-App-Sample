const { Sequelize } = require('sequelize');

const Users = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement:true,
    primaryKey: true
  },
  user_id: {
    type: Sequelize.STRING(300),
    allowNull: false
  },
  name: {
    type: Sequelize.STRING(500),
    allowNull: false
  }
});

module.exports = Users;