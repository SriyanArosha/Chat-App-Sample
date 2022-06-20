const { Sequelize } = require('sequelize');

const Rooms = sequelize.define('rooms', {
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
  name: {
    type: Sequelize.STRING(500),
    allowNull: true
  },
  type: {
    type: Sequelize.STRING(100),
    allowNull: false
  }
});

module.exports = Rooms;