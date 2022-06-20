const { Sequelize } = require('sequelize');

const Messages = sequelize.define('messages', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement:true,
    primaryKey: true
  },
  room_id: {
    type: Sequelize.STRING(300),
    allowNull: false
  },
  user_id: {
    type: Sequelize.STRING(300),
    allowNull: false
  },
  message: {
    type: Sequelize.STRING(5000),
    allowNull: false
  }
});

module.exports = Messages;